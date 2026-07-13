import { FormControl } from "@angular/forms";

export interface ContactForm {
  prenom: FormControl<string | null>;
  nom: FormControl<string | null>;
  mail: FormControl<string | null>;
  objet: FormControl<string | null>;
  message: FormControl<string | null>;
}

export interface ContactFormValue {
  prenom: string | null;
  nom: string | null;
  mail: string | null;
  objet: string | null;
  message: string | null;
}

export interface About {
  titre: string;
  contenu: Array<string>;
}

export interface Divers {
  about: About;
  profil: Array<Profil>;
}

interface Profil {
  id: number;
  nom: string;
  info: string;
  url?: string;
}
