// Service de gestion des dimanches (simulé)
import { Dimanche } from '../../models/dimanche.js';

const dimanches = [
  new Dimanche({ id: 1, date: '2024-06-09', theme: 'Espérance', chants: [1] }),
  // ... autres dimanches
];

export const DimanchesService = {
  getAll: () => dimanches,
  getById: (id) => dimanches.find(d => d.id === id),
  add: (dimanche) => dimanches.push(new Dimanche(dimanche)),
  // ... update, delete
};