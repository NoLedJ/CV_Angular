import import_experiences_json from "../../experiences/experiences.json";
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, effect, model } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Experience } from '../experience.interface';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-modal-experience',
  standalone: true,
  imports: [SafeUrlPipe],
  animations: [
      trigger('afficherExperience', [
        transition(':enter', [style({opacity: 0}), animate(('500ms ease-in'), style({opacity: 1}))]),
        transition(':leave', [animate(('100ms ease-in'), style({opacity: 0}))])
      ])
    ],
  templateUrl: './modal-experience.component.html',
  styleUrl: './modal-experience.component.scss'
})
export class ModalExperienceComponent {

  experiences_texte = import_experiences_json;
  experienceId = model(1);
  afficherModalExperience = model(false);
  experience: Partial<Experience> = {};
  photo_url = "";

  constructor() {
    effect(() => {
      this.experience = import_experiences_json[(this.experienceId() - 1)];
    });
  }

  changerExperience(x: number) {
    this.experienceId.set(this.experienceId() + x);
  }

}
