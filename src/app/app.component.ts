import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, CompetencesComponent, ExperiencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv-angular';
}
