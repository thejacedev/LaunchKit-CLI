import { ProjectTemplate } from '../types';

export const electronTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Basic Electron app with vanilla JavaScript',
    command: 'npx create-electron-app@latest PROJECT_NAME',
  },
  {
    name: 'webpack',
    description: 'Electron app with Webpack bundling',
    command: 'npx create-electron-app@latest PROJECT_NAME --template=webpack',
  },
  {
    name: 'webpack-typescript',
    description: 'Electron app with Webpack and TypeScript',
    command: 'npx create-electron-app@latest PROJECT_NAME --template=webpack-typescript',
  },
  {
    name: 'vite',
    description: 'Electron app with Vite bundling',
    command: 'npx create-electron-app@latest PROJECT_NAME --template=vite',
  },
  {
    name: 'vite-typescript',
    description: 'Electron app with Vite and TypeScript',
    command: 'npx create-electron-app@latest PROJECT_NAME --template=vite-typescript',
  },
]; 