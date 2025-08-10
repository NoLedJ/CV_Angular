import { Component, input } from '@angular/core';
import { Experience } from '../experience.interface';

@Component({
  standalone: true,
  selector: 'app-carte-experience',
  templateUrl: './carte-experience.component.html',
  styleUrls: ['./carte-experience.component.scss']
})
export class CarteExperienceComponent {

  experience = input<Experience>();

}
