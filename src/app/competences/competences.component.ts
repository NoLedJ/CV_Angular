import { Component, model } from '@angular/core';
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';
import import_competences_json from '../competences/competences.json';
import { Competences } from './competences.interface';

@Component({
  standalone: true,
  selector: 'app-competences',
  imports: [TitreSectionComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {

  competences: Competences = import_competences_json;

  openVolet = model<boolean>();
  sensFlecheHaut = model(false);

}
