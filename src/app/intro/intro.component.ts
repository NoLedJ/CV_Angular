import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-intro',
  animations: [
    trigger('openClose', [
      state(
        'up',
        style({
          transform: 'rotate(0)'
        }),
      ),
      state(
        'down',
        style({
          transform: 'rotate(-180deg)'
        }),
      ),
      transition('up <=> down', [animate('1s ease-in')])
    ]),
  ],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  openClose = model<boolean>(false);

  changeOpenClose() {
    this.openClose.update(etatCourant => etatCourant = !etatCourant);
  }

}
