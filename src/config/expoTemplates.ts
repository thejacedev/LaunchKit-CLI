import { ProjectTemplate } from '../types';

export const expoTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Default template. Designed to build multi-screen apps.',
    command: 'npx create-expo-app@latest PROJECT_NAME',
  },
  {
    name: 'blank',
    description: 'Installs minimum required npm dependencies without configuring navigation.',
    command: 'npx create-expo-app@latest PROJECT_NAME --template blank',
  },
  {
    name: 'blank-typescript',
    description: 'A Blank template with TypeScript enabled.',
    command: 'npx create-expo-app@latest PROJECT_NAME --template blank-typescript',
  },
  {
    name: 'tabs',
    description: 'Installs and configures file-based routing with Expo Router and TypeScript enabled.',
    command: 'npx create-expo-app@latest PROJECT_NAME --template tabs',
  },
  {
    name: 'bare-minimum',
    description: 'A Blank template with native directories (android and ios) generated.',
    command: 'npx create-expo-app@latest PROJECT_NAME --template bare-minimum',
  },
]; 