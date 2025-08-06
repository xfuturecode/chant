// Modèle Dimanche
export class Dimanche {
  constructor({ id, date, theme, chants }) {
    this.id = id;
    this.date = date;
    this.theme = theme;
    this.chants = chants; // tableau d'IDs de chants
  }
}