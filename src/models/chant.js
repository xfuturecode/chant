// Modèle Chant
export class Chant {
  constructor({ id, titre, auteur, type, paroles, videoUrl, pdfUrl }) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.type = type;
    this.paroles = paroles;
    this.videoUrl = videoUrl;
    this.pdfUrl = pdfUrl;
  }
}