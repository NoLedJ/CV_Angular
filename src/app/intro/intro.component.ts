import { Component } from '@angular/core';
import import_intro_json from '../intro/intro.json';
import { Intro } from './intro.interface';

@Component({
  standalone: true,
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  intro: Intro = import_intro_json;

}
