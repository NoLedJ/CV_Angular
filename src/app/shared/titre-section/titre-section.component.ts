import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-titre-section',
  templateUrl: './titre-section.component.html',
  styleUrls: ['./titre-section.component.scss']
})
export class TitreSectionComponent {

  @Input() titre = "";

}
