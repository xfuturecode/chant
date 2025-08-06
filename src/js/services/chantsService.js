// Service de gestion des chants (simulé)
import { Chant } from '../../models/chant.js';

const chants = [
  new Chant({ id: 1, titre: 'Hosanna', auteur: 'Auteur 1', type: 'Louange', paroles: 'Paroles...', videoUrl: '', pdfUrl: '' }),
  // ... autres chants
];

export const ChantsService = {
  getAll: () => chants,
  getById: (id) => chants.find(c => c.id === id),
  search: (query) => chants.filter(c => c.titre.toLowerCase().includes(query.toLowerCase())),
  add: (chant) => chants.push(new Chant(chant)),
  // ... update, delete
};