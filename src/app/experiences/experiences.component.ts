import { Component } from '@angular/core';
import import_experiences_json from "../experiences/experiences.json"
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';

@Component({
  standalone: true,
  selector: 'app-experiences',
  imports: [TitreSectionComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  experiences_textes = import_experiences_json;

}
