import { MenuManager } from './utils/menuManager';
import { expoTemplates } from './config/expoTemplates';
import { nextTemplates } from './config/nextTemplates';
import { electronTemplates } from './config/electronTemplates';
import { viteTemplates } from './config/viteTemplates';
import { reactRouterTemplates } from './config/reactRouterTemplates';
import { expressTemplates } from './config/expressTemplates';
import { nestTemplates } from './config/nestTemplates';
import { angularTemplates } from './config/angularTemplates';
import { svelteTemplates } from './config/svelteTemplates';
import { blitzTemplates } from './config/blitzTemplates';
import { MenuItem } from './types';
import inquirer from 'inquirer';

export async function getProjectName(): Promise<string> {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter your project name:',
    validate: (input: string) => {
      if (!input.trim()) {
        return 'Project name is required!';
      }
      if (!/^[a-z0-9-]+$/.test(input)) {
        return 'Project name can only contain lowercase letters, numbers, and hyphens';
      }
      return true;
    }
  });
  return projectName.trim();
}

export async function main(): Promise<void> {
  const expoMenuItems: MenuItem[] = expoTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const nextMenuItems: MenuItem[] = nextTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const electronMenuItems: MenuItem[] = electronTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const viteMenuItems: MenuItem[] = viteTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const reactRouterMenuItems: MenuItem[] = reactRouterTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const expressMenuItems: MenuItem[] = expressTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const nestMenuItems: MenuItem[] = nestTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const angularMenuItems: MenuItem[] = angularTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const svelteMenuItems: MenuItem[] = svelteTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const blitzMenuItems: MenuItem[] = blitzTemplates.map(template => ({
    title: template.name,
    description: template.description,
    action: async (): Promise<void> => {
      const projectName = await getProjectName();
      const command = template.command.replace('PROJECT_NAME', projectName);
      await MenuManager.executeCommand(command);
    }
  }));

  const mainMenu: MenuItem[] = [
    {
      title: 'Expo',
      description: 'Create a new Expo project with various templates',
      action: async (): Promise<void> => {},
      subMenu: expoMenuItems
    },
    {
      title: 'Next.js',
      description: 'Create a new Next.js project',
      action: async (): Promise<void> => {},
      subMenu: nextMenuItems
    },
    {
      title: 'Electron',
      description: 'Create a new Electron desktop application',
      action: async (): Promise<void> => {},
      subMenu: electronMenuItems
    },
    {
      title: 'Vite',
      description: 'Create a new Vite project with various frameworks',
      action: async (): Promise<void> => {},
      subMenu: viteMenuItems
    },
    {
      title: 'React Router',
      description: 'Create a new React Router project',
      action: async (): Promise<void> => {},
      subMenu: reactRouterMenuItems
    },
    {
      title: 'Express',
      description: 'Create a new Express.js project with various view engines and CSS preprocessors',
      action: async (): Promise<void> => {},
      subMenu: expressMenuItems
    },
    {
      title: 'Nest.js',
      description: 'Create a new Nest.js project with TypeScript and various configuration options',
      action: async (): Promise<void> => {},
      subMenu: nestMenuItems
    },
    {
      title: 'Angular',
      description: 'Create a new Angular project with various configuration options (v17+)',
      action: async (): Promise<void> => {},
      subMenu: angularMenuItems
    },
    {
      title: 'Svelte',
      description: 'Create a new Svelte project with various templates and configurations',
      action: async (): Promise<void> => {},
      subMenu: svelteMenuItems
    },
    {
      title: 'Blitz',
      description: 'Create a new Blitz.js project - The Fullstack React Framework',
      action: async (): Promise<void> => {},
      subMenu: blitzMenuItems
    }
  ];

  const menuManager = new MenuManager(mainMenu);
  await menuManager.display();
}

if (require.main === module) {
  main().catch(console.error);
} 