import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-niveau-pourcentage',
  templateUrl: './niveau-pourcentage.component.html',
  styleUrls: ['./niveau-pourcentage.component.scss']
})
export class NiveauPourcentageComponent implements OnInit {

  @Input() pourcentage: number = 0;
  animationStyles = "";
  keyFramesStyle = "";
  @HostBinding('style.--degresPourcentage')
  degresPourcentage = "";

  constructor() { }

  ngOnInit() {
    this.animationStyles = "transform: rotate(" + this.pourcentage * 1.8 + "deg)";
    this.degresPourcentage = "rotate(" + this.pourcentage * 1.8 + "deg)";
  }

}
