import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-onglet-intro',
  standalone: true,
  imports: [],
  animations: [
    trigger('openClose', [
      state(
        'up',
        style({
          rotate: 0
        }),
      ),
      state(
        'down',
        style({
          rotate: '-180deg'
        })
      ),
      transition('up <=> down', [animate('1s ease-in')])
    ])
  ],
  templateUrl: './onglet-intro.component.html',
  styleUrl: './onglet-intro.component.scss'
})
export class OngletIntroComponent {

  openClose = model<boolean>(false);

  changeOpenClose() {
    this.openClose.update(etatCourant => etatCourant = !etatCourant);
  }
}
