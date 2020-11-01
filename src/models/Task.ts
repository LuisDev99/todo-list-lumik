export type Task = {
  name: String;
  description: String;
  state: 'Pendiente' | 'En Progreso' | 'Completada';
  estimatedTime: String;
};