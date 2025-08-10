import { Component, model } from '@angular/core';
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import import_divers_json from '../divers/divers.json';
import { DiversService } from './divers.service';

@Component({
  standalone: true,
  selector: 'app-divers',
    imports: [TitreSectionComponent, ReactiveFormsModule],
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.scss']
})
export class DiversComponent {

  divers = import_divers_json;

  openVolet = model<boolean>();
  sensFlecheHaut = model(true);

  loading = false;
  texteBouton = "Envoyer";

  prenomFormControl = new FormControl<string>('', [Validators.required]);
  nomFormControl = new FormControl<string>('', [Validators.required]);
  mailFormControl = new FormControl<string>('', [Validators.required, Validators.email]);
  objetFormControl = new FormControl<string>('', [Validators.required]);
  messageFormControl = new FormControl<string>('', [Validators.required]);

  contactForm = new FormGroup({
    prenom: this.prenomFormControl,
    nom: this.nomFormControl,
    mail: this.mailFormControl,
    objet: this.objetFormControl,
    message: this.messageFormControl
  })

  constructor(private diversService: DiversService) {console.log(this.contactForm.validator)}

  validerRequired() {
    if (this.prenomFormControl.hasError('required') && (this.prenomFormControl.dirty || this.prenomFormControl.touched)
      || this.nomFormControl.hasError('required') && (this.nomFormControl.dirty || this.nomFormControl.touched)
      || this.mailFormControl.hasError('required') && (this.mailFormControl.dirty || this.mailFormControl.touched)
      || this.objetFormControl.hasError('required') && (this.objetFormControl.dirty || this.objetFormControl.touched)
      || this.messageFormControl.hasError('required') && (this.messageFormControl.dirty || this.messageFormControl.touched)) {
        return true;
    } else return false;
  }

  envoyerMessage() {
    this.loading = true;
    this.texteBouton = "En cours...";

    this.diversService.envoyerMessage(this.contactForm.value).subscribe({
      next: () => console.log('Envoi mail OK !'),
      error: err => {
        console.log(err);
        this.loading = false;
        this.texteBouton = "Envoyer";
      },
      complete: () => {
        this.loading = false;
        this.texteBouton = "Envoyer";
      }
    });
  }

}
