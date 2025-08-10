import { Component, inject, model } from '@angular/core';
import { TitreSectionComponent } from '../shared/titre-section/titre-section.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import import_divers_json from '../divers/divers.json';
import { DiversService } from './divers.service';
import { ContactForm, Divers } from './divers.interface';

@Component({
  standalone: true,
  selector: 'app-divers',
    imports: [TitreSectionComponent, ReactiveFormsModule],
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.scss']
})
export class DiversComponent {

  private diversService = inject(DiversService);

  divers: Divers = import_divers_json;

  openVolet = model<boolean>();
  sensFlecheHaut = model(true);

  loading = false;
  reponse_serveur_mail_erreur = false;
  reponse_serveur_mail_ok = false;

  prenomFormControl = new FormControl<string>('', [Validators.required]);
  nomFormControl = new FormControl<string>('', [Validators.required]);
  mailFormControl = new FormControl<string>('', [Validators.required, Validators.email]);
  objetFormControl = new FormControl<string>('', [Validators.required]);
  messageFormControl = new FormControl<string>('', [Validators.required]);

  contactForm = new FormGroup<ContactForm>({
    prenom: this.prenomFormControl,
    nom: this.nomFormControl,
    mail: this.mailFormControl,
    objet: this.objetFormControl,
    message: this.messageFormControl
  });

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

    this.diversService.envoyerMessage(this.contactForm.value).subscribe({
      error: err => {
        console.log(err);
        this.reponse_serveur_mail_erreur = true;
        this.loading = false;
      },
      complete: () => {
        this.reponse_serveur_mail_ok = true;
        this.loading = false;
      }
    });
  }

}
