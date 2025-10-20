import { Component, input, model } from '@angular/core';
import { Experience } from '../experience.interface';

@Component({
  standalone: true,
  selector: 'app-carte-experience',
  templateUrl: './carte-experience.component.html',
  styleUrls: ['./carte-experience.component.scss']
})
export class CarteExperienceComponent {

  experience = input<Experience>();

  afficherModalExperience = model<boolean>(false);
  experienceSelectionnee = model<number>();

  afficherExperience(id: number | undefined) {
    if (id != undefined) {
      this.afficherModalExperience.set(true);
      this.experienceSelectionnee.set(id);
    }
  }

}
