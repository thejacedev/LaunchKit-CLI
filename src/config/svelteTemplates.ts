import { ProjectTemplate } from '../types';

export const svelteTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Create a new Svelte project with the default template',
    command: 'npx create-svelte@latest PROJECT_NAME',
  },
  {
    name: 'sveltekit',
    description: 'Create a new SvelteKit project (recommended for full-stack apps)',
    command: 'npm create svelte@latest PROJECT_NAME',
  },
  {
    name: 'typescript',
    description: 'Create a new Svelte project with TypeScript',
    command: 'npx create-svelte@latest PROJECT_NAME --template skeleton --types typescript',
  },
  {
    name: 'minimal',
    description: 'Create a minimal Svelte project',
    command: 'npx create-svelte@latest PROJECT_NAME --template skeleton',
  },
  {
    name: 'demo',
    description: 'Create a new Svelte project with demo content',
    command: 'npx create-svelte@latest PROJECT_NAME --template skeleton-demo',
  },
]; 