import { ProjectTemplate } from '../types';

export const blitzTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Create a new Blitz.js project with the default template',
    command: 'npx blitz new PROJECT_NAME',
  },
  {
    name: 'typescript',
    description: 'Create a new Blitz.js project with TypeScript',
    command: 'npx blitz new PROJECT_NAME --ts',
  },
  {
    name: 'javascript',
    description: 'Create a new Blitz.js project with JavaScript',
    command: 'npx blitz new PROJECT_NAME --js',
  },
  {
    name: 'minimal',
    description: 'Create a minimal Blitz.js project',
    command: 'npx blitz new PROJECT_NAME --minimal',
  },
  {
    name: 'no-git',
    description: 'Create a new Blitz.js project without Git initialization',
    command: 'npx blitz new PROJECT_NAME --no-git',
  },
]; 