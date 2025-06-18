import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-carte-experience',
  animations: [
      trigger('afficherExperience', [
        transition(':enter', [style({opacity: 0}), animate(('500ms ease-in'), style({opacity: 1}))]),
        transition(':leave', [animate(('100ms ease-in'), style({opacity: 0}))])
      ])
    ],
  templateUrl: './carte-experience.component.html',
  styleUrls: ['./carte-experience.component.css']
})
export class CarteExperienceComponent implements OnInit {

  @Input() experience: any;
  afficherExperience = false;

  constructor() { }

  ngOnInit() {
  }

}
