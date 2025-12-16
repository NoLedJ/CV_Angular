import import_experiences_json from "../experiences/experiences.json";
import { Component, effect, ElementRef, model, ViewChild } from '@angular/core';
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CarteExperienceComponent } from './carte-experience/carte-experience.component';
import { Experience } from './experience.interface';

@Component({
  standalone: true,
  selector: 'app-experiences',
  animations: [
    trigger('afficherExperience', [
      state(
        'visible',
        style({
          opacity: '100%',
          display: '*'
        }),
      ),
      state(
        'invisible',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      state(
        'elargir',
        style({
          width: '100%'
        }),
      ),
      state(
        'retrecir',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      transition('elargir <=> *', [animate('2s ease-in')]),
      transition('retrecir <=> *', [animate('100ms ease-in')]),
      transition('invisible <=> visible', [animate('1s ease-in')])
    ])
  ],
  imports: [TitreSectionComponent, CarteExperienceComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  @ViewChild('content', { static: false }) content?: ElementRef<HTMLElement>;

  experiences_textes: Array<Experience> = import_experiences_json;

  openVolet = model<boolean>();
  sensFlecheHaut = model<boolean>();
  afficherModalExperience = model<boolean>(false);
  experienceSelectionnee = model<number>();

  constructor() {
    effect(() => {
      if (this.openVolet()) {
        const el = this.content?.nativeElement;
        if (el) el.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }

}
