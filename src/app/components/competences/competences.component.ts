import { Component } from '@angular/core';
import import_competences_json from '../competences/competences.json';
import { Competences } from './competences.interface';
import { TitreSectionComponent } from '../../shared/titre-section/titre-section.component';

@Component({
  standalone: true,
  selector: 'app-competences',
  imports: [TitreSectionComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {

  competences: Competences = import_competences_json;

}
