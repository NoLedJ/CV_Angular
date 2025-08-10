import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  experience = input<any>();
  afficherExperience = false;
  videoUrl!: SafeResourceUrl;
  photo_url = "";

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.experience() && this.experience().contexte) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.experience().contexte.video);
    }
    this.photo_url = `url(photos\\experiences"${this.experience().photo_url}")`;
  }

}
