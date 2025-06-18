import { Component, model } from '@angular/core';
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';

@Component({
  standalone: true,
  selector: 'app-divers',
    imports: [TitreSectionComponent],
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.scss']
})
export class DiversComponent {

  openVolet = model<boolean>();
  sensFlecheHaut = model(true);

}
