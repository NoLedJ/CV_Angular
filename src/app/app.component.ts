import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, CompetencesComponent, ExperiencesComponent],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'translateY(0)'
        }),
      ),
      state(
        'closed',
        style({
          transform: 'translateY(-180px)'
        })
      ),
      transition('open <=> closed', [animate('1s ease-in')])
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  openDescription = false;

}
