import { Component, model } from '@angular/core';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.scss'
})
export class MentionsLegalesComponent {

  afficherMentionsLegales = model(false);

}
