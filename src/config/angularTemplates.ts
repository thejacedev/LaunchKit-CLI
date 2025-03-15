import { ProjectTemplate } from '../types';

export const angularTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Create a new Angular project with standalone components (Angular 17+)',
    command: 'npx @angular/cli new PROJECT_NAME',
  },
  {
    name: 'with-routing',
    description: 'Create a new Angular project with routing configuration',
    command: 'npx @angular/cli new PROJECT_NAME --routing',
  },
  {
    name: 'with-scss',
    description: 'Create a new Angular project using SCSS for styling',
    command: 'npx @angular/cli new PROJECT_NAME --style=scss',
  },
  {
    name: 'with-ngmodules',
    description: 'Create a new Angular project using NgModules (traditional mode)',
    command: 'npx @angular/cli new PROJECT_NAME --no-standalone',
  },
  {
    name: 'minimal',
    description: 'Create a new Angular project with minimal setup',
    command: 'npx @angular/cli new PROJECT_NAME --minimal',
  },
  {
    name: 'strict',
    description: 'Create a new Angular project with strict mode enabled',
    command: 'npx @angular/cli new PROJECT_NAME --strict',
  },
  {
    name: 'complete',
    description: 'Create a new Angular project with routing, SCSS, and strict mode',
    command: 'npx @angular/cli new PROJECT_NAME --routing --style=scss --strict',
  },
]; 