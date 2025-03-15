import { ProjectTemplate } from '../types';

export const nextTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Create a new Next.js application with the default configuration.',
    command: 'npx create-next-app@latest PROJECT_NAME',
  },
]; 