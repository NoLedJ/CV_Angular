import import_experiences_json from "../../experiences/experiences.json";
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, effect, ElementRef, model, ViewChild } from '@angular/core';
import { Experience } from "../../experiences/experience.interface";
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-modal-experience',
  standalone: true,
  imports: [SafeUrlPipe],
  animations: [

    ],
  templateUrl: './modal-experience.component.html',
  styleUrl: './modal-experience.component.scss'
})
export class ModalExperienceComponent {

  @ViewChild('modalContent', { static: false }) modalContent?: ElementRef<HTMLElement>;

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

  changerExperience(x: number, event: Event) {
    this.experienceId.set(this.experienceId() + x);
    const el = this.modalContent?.nativeElement;
    if (el) el.scrollTo({ top: 0, behavior: 'instant' });
  }

}
