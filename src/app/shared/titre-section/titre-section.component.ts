import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, model } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-titre-section',
    animations: [
      trigger('gererVisibiliteFleche', [
        state(
          'visible',
          style({
            opacity: '100%'
          }),
        ),
        state(
          'invisible',
          style({
            opacity: 0
          })
        ),
        transition('visible <=> invisible', [animate('1s ease-in')])
      ]),
      trigger('gererSensFleche', [
        state(
          'bas',
          style({
            rotate: '0deg'
          }),
        ),
        state(
          'haut',
          style({
            rotate: '-180deg'
          })
        ),
        transition('bas <=> haut', [animate('1s ease-in')])
      ]),
      trigger('gererTitre', [
        state(
          'contour',
          style({
            background: "var(--tertiary-color)",
            boxShadow: '5px 5px 8px var(--dark-grey)',
            fontSize: '13pt',
            color: "var(--primary-color)"
          }),
        ),
        state(
          'sans_contour',
          style({
            background: 'none',
            boxShadow: 'none',
            fontSize: '17pt',
            color: '*'
          })
        ),
        transition('contour <=> sans_contour', [animate('1s ease-in')])
      ])
    ],
  templateUrl: './titre-section.component.html',
  styleUrls: ['./titre-section.component.scss']
})
export class TitreSectionComponent {

  @Input() titre = "";

  flecheVisible = model<boolean>();
  sensFlecheHaut = model<boolean>();

}
