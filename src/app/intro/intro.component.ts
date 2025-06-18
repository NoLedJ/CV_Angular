import { Component, model } from '@angular/core';
import import_intro_json from '../intro/intro.json';
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
          rotate: '0'
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
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  openClose = model<boolean>(false);
  intro = import_intro_json;

  changeOpenClose() {
    this.openClose.update(etatCourant => etatCourant = !etatCourant);
  }

}
