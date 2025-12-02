import { Component, model } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group
} from '@angular/animations';
import { DiversComponent } from './divers/divers.component';
import { ModalExperienceComponent } from "./experiences/modal-experience/modal-experience.component";
import { OngletIntroComponent } from "./intro/onglet-intro/onglet-intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroComponent,
    CompetencesComponent,
    ExperiencesComponent,
    DiversComponent,
    ModalExperienceComponent,
    OngletIntroComponent
],
  animations: [
    trigger('openIntroDebut', [
      transition(':enter', [
        style({
          translate: '0 -300px'
        }),
        animate('1.5s ease-out', style({ translate: '0 -180px'}))
      ])
    ]),
    trigger('openCloseIntro', [
      state(
        'open',
        style({
          translate: 0
        }),
      ),
      state(
        'close',
        style({
          translate: '0 -180px'
        })
      ),
      transition('open <=> close', [
        group([
          query("@openClose", [animateChild()], { optional: true }),
          animate("1s ease-in")
        ])
      ])
    ]),
    trigger('openOngletIntroDebut', [
      transition(':enter', [
        style({
          translate: '0 -120px'
        }),
        animate('1.5s ease-out', style({ translate: 0 }))
      ])
    ]),
    trigger('openCloseOngletIntro', [
      state(
        'open',
        style({
          translate: '0 180px'
        }),
      ),
      state(
        'close',
        style({
          translate: 0
        })
      ),
      transition('open <=> close', [
        group([
          query("@openClose", [animateChild()], { optional: true }),
          animate("1s ease-in")
        ])
      ])
    ]),
    trigger('openCompetencesDebut', [
      transition(':enter', [
        style({
          translate: '0 calc(100% - 200px)'
        }),
        animate('1.5s ease-in', style({ translate: 0 }))
      ])
    ]),
    trigger('openCloseVolets', [
      state(
        'openCompetences',
        style({
          height: 'calc(100% - 280px)'
        }),
      ),
      state(
        'closeCompetences',
        style({
          height: '110px'
        })
      ),
      state(
        'openExperiences',
        style({
          height: 'calc(100% - 290px)'
        }),
      ),
      state(
        'closeExperiences',
        style({
          height: '90px'
        })
      ),
      transition('openCompetences <=> closeCompetences', [
        group([
          query("@gererSensFleche", [animateChild()], { optional: true }),
          query("@gererVisibiliteFleche", [animateChild()]),
          query("@gererTitre", [animateChild()], { optional: true }),
          animate("1s ease-in")
        ])
      ]),
      transition('openExperiences <=> closeExperiences', [
        group([
          query("@gererSensFleche", [animateChild()], { optional: true }),
          query("@gererVisibiliteFleche", [animateChild()]),
          query("@gererTitre", [animateChild()], { optional: true }),
          animate("1s ease-in")
        ])
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  description = false;
  experienceSelectionnee = model<number>(0);
  competences = model(true);
  experiences = model(false);
  divers = model(false);
  sensFlecheExperiencesHaut = model(true);
  afficherModalExperience = model(false);

  openVolets(volet: string) {
    switch (volet) {
      case "competences":
        this.competences.set(true);
        this.experiences.set(false);
        this.divers.set(false);
        this.sensFlecheExperiencesHaut.set(true);
        break;
      case "experiences":
        this.competences.set(false);
        this.experiences.set(true);
        this.divers.set(false);
        break;
      case "divers":
        this.competences.set(false);
        this.experiences.set(false);
        this.divers.set(true);
        this.sensFlecheExperiencesHaut.set(false);
        break;
    }
  }

}
