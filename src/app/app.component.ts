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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, CompetencesComponent, ExperiencesComponent, DiversComponent],
  animations: [
    trigger('openCloseIntro', [
      state(
        'open',
        style({
          translate: '0'
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
          query("@openClose", [animateChild()]),
          animate("1s ease-in")
        ])
      ])
    ]),
    trigger('openCloseVolets', [
      state(
        'openCompetences',
        style({
          height: 'calc(100vh - 270px)'
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
          height: 'calc(100vh - 290px)'
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
  competences = model(true);
  experiences = model(false);
  divers = model(false);
  sensFlecheExperiencesHaut = model(true);

  openVolets(volet: string) {
    switch (volet) {
      case "competences":
        this.competences.update(actuel => actuel = true);
        this.experiences.update(actuel => actuel = false);
        this.divers.update(actuel => actuel = false);
        this.sensFlecheExperiencesHaut.update(actuel => actuel = true);
        break;
      case "experiences":
        this.competences.update(actuel => actuel = false);
        this.experiences.update(actuel => actuel = true);
        this.divers.update(actuel => actuel = false);
        break;
      case "divers":
        this.competences.update(actuel => actuel = false);
        this.experiences.update(actuel => actuel = false);
        this.divers.update(actuel => actuel = true);
        this.sensFlecheExperiencesHaut.update(actuel => actuel = false);
        break;
    }
  }

}
