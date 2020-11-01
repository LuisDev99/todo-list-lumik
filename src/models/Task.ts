export type Task = {
  name: String;
  description: String;
  state: 'pending' | 'in progress' | 'done';
  estimatedTime: Date;
};