import import_experiences_json from "../../experiences/experiences.json";
import { Component, effect, ElementRef, model, ViewChild } from '@angular/core';
import { Experience } from "../../experiences/experience.interface";
import { SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-modal-experience',
  standalone: true,
  templateUrl: './modal-experience.component.html',
  styleUrl: './modal-experience.component.scss'
})
export class ModalExperienceComponent {

  @ViewChild('modalContent', { static: false }) modalContent?: ElementRef<HTMLElement>;

  experience: Partial<Experience> = {};
  photo_url = "";

  experiences_texte = model<Experience[]>([]);
  youtubeVideosArray = model<SafeResourceUrl[]>([]);
  experienceId = model(1);
  afficherModalExperience = model(false);

  constructor() {
    effect(() => {
      this.experience = import_experiences_json[(this.experienceId() - 1)];
    });
  }

  changerExperience(x: number, event: MouseEvent) {
    event.stopPropagation();
    this.experienceId.set(this.experienceId() + x);
    const el = this.modalContent?.nativeElement;
    if (el) el.scrollTo({ top: 0, behavior: 'instant' });
  }

}
