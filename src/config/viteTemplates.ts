import { ProjectTemplate } from '../types';

export const viteTemplates: ProjectTemplate[] = [
  {
    name: 'vanilla',
    description: 'Vanilla JavaScript template',
    command: 'npm create vite@latest PROJECT_NAME -- --template vanilla',
  },
  {
    name: 'vanilla-ts',
    description: 'Vanilla TypeScript template',
    command: 'npm create vite@latest PROJECT_NAME -- --template vanilla-ts',
  },
  {
    name: 'vue',
    description: 'Vue.js template',
    command: 'npm create vite@latest PROJECT_NAME -- --template vue',
  },
  {
    name: 'vue-ts',
    description: 'Vue.js with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template vue-ts',
  },
  {
    name: 'react',
    description: 'React template',
    command: 'npm create vite@latest PROJECT_NAME -- --template react',
  },
  {
    name: 'react-ts',
    description: 'React with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template react-ts',
  },
  {
    name: 'react-swc',
    description: 'React with SWC',
    command: 'npm create vite@latest PROJECT_NAME -- --template react-swc',
  },
  {
    name: 'react-swc-ts',
    description: 'React with SWC and TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template react-swc-ts',
  },
  {
    name: 'preact',
    description: 'Preact template',
    command: 'npm create vite@latest PROJECT_NAME -- --template preact',
  },
  {
    name: 'preact-ts',
    description: 'Preact with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template preact-ts',
  },
  {
    name: 'lit',
    description: 'Lit template',
    command: 'npm create vite@latest PROJECT_NAME -- --template lit',
  },
  {
    name: 'lit-ts',
    description: 'Lit with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template lit-ts',
  },
  {
    name: 'svelte',
    description: 'Svelte template',
    command: 'npm create vite@latest PROJECT_NAME -- --template svelte',
  },
  {
    name: 'svelte-ts',
    description: 'Svelte with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template svelte-ts',
  },
  {
    name: 'solid',
    description: 'Solid template',
    command: 'npm create vite@latest PROJECT_NAME -- --template solid',
  },
  {
    name: 'solid-ts',
    description: 'Solid with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template solid-ts',
  },
  {
    name: 'qwik',
    description: 'Qwik template',
    command: 'npm create vite@latest PROJECT_NAME -- --template qwik',
  },
  {
    name: 'qwik-ts',
    description: 'Qwik with TypeScript',
    command: 'npm create vite@latest PROJECT_NAME -- --template qwik-ts',
  },
]; 