export interface Experience {
  id: number;
  poste: string;
  periode: string;
  projet: string;
  lieu: string;
  contexte: Contexte;
  technologies: Array<Technologie>;
  responsabilites: Array<string>;
  devops?: Array<string>;
  resultat: Array<string>;
  methode: Array<string>;
  competences_developpees: Array<CompetenceDeveloppee>;
  photo_url: string;
  afficher: boolean;
}

interface Contexte {
  secteur: string;
  video: Required<string>;
  equipes: Array<Equipe>;
  objectif: string;
}

interface Equipe {
  id: number;
  nom?: string;
  details: Array<string>;
}

interface Technologie {
  id: number,
  nom: string;
  details: string;
  outils?: string;
}

interface CompetenceDeveloppee {
  id: number,
  nom: string;
  details: Array<DetailCompetenceDeveloppee>
}

interface DetailCompetenceDeveloppee {
  id: number;
  nom: string;
  explication: string;
}
