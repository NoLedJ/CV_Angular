import { Component } from '@angular/core';
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';
import import_competences_generales_json from '../competences/competences_generales.json';
import import_formations_certifications_json from '../competences/formations_certifications.json';
import import_competences_techniques_json from '../competences/competences_techniques.json';
import { NiveauPourcentageComponent } from '../shared/niveau-pourcentage/niveau-pourcentage.component';

@Component({
  standalone: true,
  selector: 'app-competences',
  imports: [TitreSectionComponent, NiveauPourcentageComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {

  competences_generales = import_competences_generales_json;
  formations_certifications = import_formations_certifications_json;
  competences_techniques = import_competences_techniques_json;

}
