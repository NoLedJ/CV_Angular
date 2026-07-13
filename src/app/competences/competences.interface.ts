export interface Competences {
  competences_generales: Array<CompetenceGenerale>,
  formations: Array<Formation>,
  competences_techniques: Array<CompetenceTechnique>
}

interface CompetenceGenerale {
  id: number,
  nom: string,
  note: number
}

interface Formation {
  id: number,
  nom: string,
  periode: string,
  etablissement: string,
  ville: string
}

interface CompetenceTechnique {
  id: number,
  nom: string,
  logo_url: string
}
