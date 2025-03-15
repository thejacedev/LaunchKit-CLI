import { expoTemplates } from '../src/config/expoTemplates';
import { nextTemplates } from '../src/config/nextTemplates';
import { electronTemplates } from '../src/config/electronTemplates';
import { viteTemplates } from '../src/config/viteTemplates';
import { reactRouterTemplates } from '../src/config/reactRouterTemplates';
import { expressTemplates } from '../src/config/expressTemplates';
import { nestTemplates } from '../src/config/nestTemplates';
import { angularTemplates } from '../src/config/angularTemplates';
import { svelteTemplates } from '../src/config/svelteTemplates';
import { blitzTemplates } from '../src/config/blitzTemplates';

describe('Template Commands', () => {
  const testProjectName = 'test-project';

  // Test 1: Expo Templates
  test('Expo templates should generate correct commands', () => {
    expect(expoTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-expo-app@latest test-project');
    expect(expoTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-expo-app@latest test-project --template blank');
    expect(expoTemplates[2].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-expo-app@latest test-project --template blank-typescript');
  });

  // Test 2: Next.js Templates
  test('Next.js templates should generate correct commands', () => {
    expect(nextTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-next-app@latest test-project');
  });

  // Test 3: Electron Templates
  test('Electron templates should generate correct commands', () => {
    expect(electronTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-electron-app@latest test-project');
    expect(electronTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-electron-app@latest test-project --template=webpack');
  });

  // Test 4: Vite Templates
  test('Vite templates should generate correct commands', () => {
    expect(viteTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npm create vite@latest test-project -- --template vanilla');
    expect(viteTemplates[2].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npm create vite@latest test-project -- --template vue');
    expect(viteTemplates[4].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npm create vite@latest test-project -- --template react');
  });

  // Test 5: React Router Templates
  test('React Router templates should generate correct commands', () => {
    expect(reactRouterTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-react-router@latest test-project');
  });

  // Test 6: Express Templates
  test('Express templates should generate correct commands', () => {
    expect(expressTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx express-generator test-project');
    expect(expressTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx express-generator test-project --view ejs');
    expect(expressTemplates[2].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx express-generator test-project --view hbs');
  });

  // Test 7: Nest.js Templates
  test('Nest.js templates should generate correct commands', () => {
    expect(nestTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx @nestjs/cli new test-project');
    expect(nestTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx @nestjs/cli new test-project --strict');
  });

  // Test 8: Angular Templates
  test('Angular templates should generate correct commands', () => {
    expect(angularTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx @angular/cli new test-project');
    expect(angularTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx @angular/cli new test-project --routing');
    expect(angularTemplates[3].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx @angular/cli new test-project --no-standalone');
  });

  // Test 9: Svelte Templates
  test('Svelte templates should generate correct commands', () => {
    expect(svelteTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-svelte@latest test-project');
    expect(svelteTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npm create svelte@latest test-project');
    expect(svelteTemplates[2].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx create-svelte@latest test-project --template skeleton --types typescript');
  });

  // Test 10: Blitz Templates
  test('Blitz templates should generate correct commands', () => {
    expect(blitzTemplates[0].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx blitz new test-project');
    expect(blitzTemplates[1].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx blitz new test-project --ts');
    expect(blitzTemplates[2].command.replace('PROJECT_NAME', testProjectName))
      .toBe('npx blitz new test-project --js');
  });

  // Additional Test: Template Structure
  test('All templates should have required properties', () => {
    const allTemplates = [
      ...expoTemplates,
      ...nextTemplates,
      ...electronTemplates,
      ...viteTemplates,
      ...reactRouterTemplates,
      ...expressTemplates,
      ...nestTemplates,
      ...angularTemplates,
      ...svelteTemplates,
      ...blitzTemplates
    ];

    allTemplates.forEach(template => {
      expect(template).toHaveProperty('name');
      expect(template).toHaveProperty('description');
      expect(template).toHaveProperty('command');
      expect(template.command).toContain('PROJECT_NAME');
    });
  });
}); 