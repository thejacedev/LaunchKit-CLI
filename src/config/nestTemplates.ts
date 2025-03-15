import { ProjectTemplate } from '../types';

export const nestTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Create a new Nest.js project with default settings (TypeScript)',
    command: 'npx @nestjs/cli new PROJECT_NAME',
  },
  {
    name: 'strict',
    description: 'Create a new Nest.js project with strict TypeScript settings',
    command: 'npx @nestjs/cli new PROJECT_NAME --strict',
  },
  {
    name: 'skip-git',
    description: 'Create a new Nest.js project without Git initialization',
    command: 'npx @nestjs/cli new PROJECT_NAME --skip-git',
  },
  {
    name: 'skip-install',
    description: 'Create a new Nest.js project without installing dependencies',
    command: 'npx @nestjs/cli new PROJECT_NAME --skip-install',
  },
  {
    name: 'package-manager-npm',
    description: 'Create a new Nest.js project using npm as package manager',
    command: 'npx @nestjs/cli new PROJECT_NAME --package-manager npm',
  },
  {
    name: 'package-manager-yarn',
    description: 'Create a new Nest.js project using yarn as package manager',
    command: 'npx @nestjs/cli new PROJECT_NAME --package-manager yarn',
  },
  {
    name: 'package-manager-pnpm',
    description: 'Create a new Nest.js project using pnpm as package manager',
    command: 'npx @nestjs/cli new PROJECT_NAME --package-manager pnpm',
  },
]; 