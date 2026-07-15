import import_experiences_json from "./experiences/experiences.json";
import { Component, model, OnInit } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { DiversComponent } from './divers/divers.component';
import { ModalExperienceComponent } from "./modales/modal-experience/modal-experience.component";
import { MentionsLegalesComponent } from './modales/mentions-legales/mentions-legales.component';
import { Experience } from "./experiences/experience.interface";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroComponent,
    CompetencesComponent,
    ExperiencesComponent,
    DiversComponent,
    ModalExperienceComponent,
    MentionsLegalesComponent
],
  animations: [
    trigger('afficherModal', [
        transition(':enter', [style({opacity: 0}), animate(('500ms ease-in'), style({opacity: 1}))]),
        transition(':leave', [animate(('100ms ease-in'), style({opacity: 0}))])
      ]),
    trigger('openIntroDebut', [
      transition(':enter', [
        style({
          translate: '0 -300px'
        }),
        animate('2s ease-out', style({ translate: '0'}))
      ])
    ]),
    trigger('openMainDebut', [
      transition(':enter', [
        style({
          translate: '0 100dvh'
        }),
        animate('1.5s ease-out', style({ translate: '0'}))
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  loading = true;

  description = false;
  experiences_texte = model<Experience[]>(import_experiences_json);

  youtubeVideosArray = model<SafeResourceUrl[]>([]);
  experienceSelectionnee = model<number>(0);
  afficherModalExperience = model(false);
  afficherMentionsLegales = model(false);

  constructor(private readonly sanitizer: DomSanitizer) {
    this.youtubeVideosArray.set(import_experiences_json.map((exp: Experience) => this.sanitizer.bypassSecurityTrustResourceUrl(exp.contexte.video)));
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

  fermerModal(event: Event) {
    if (event.target === event.currentTarget) {
      this.afficherModalExperience.set(false);
      this.afficherMentionsLegales.set(false)
    }
  }

}
