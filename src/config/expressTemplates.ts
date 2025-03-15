import { ProjectTemplate } from '../types';

export const expressTemplates: ProjectTemplate[] = [
  {
    name: 'default',
    description: 'Create a new Express.js project with default settings (Jade view engine)',
    command: 'npx express-generator PROJECT_NAME',
  },
  {
    name: 'ejs',
    description: 'Create an Express.js project with EJS view engine',
    command: 'npx express-generator PROJECT_NAME --view ejs',
  },
  {
    name: 'handlebars',
    description: 'Create an Express.js project with Handlebars view engine',
    command: 'npx express-generator PROJECT_NAME --view hbs',
  },
  {
    name: 'pug',
    description: 'Create an Express.js project with Pug view engine',
    command: 'npx express-generator PROJECT_NAME --view pug',
  },
  {
    name: 'no-view',
    description: 'Create an Express.js project without any view engine (API mode)',
    command: 'npx express-generator PROJECT_NAME --no-view',
  },
  {
    name: 'ejs-sass',
    description: 'Create an Express.js project with EJS view engine and Sass CSS preprocessor',
    command: 'npx express-generator PROJECT_NAME --view ejs --css sass',
  },
  {
    name: 'pug-stylus',
    description: 'Create an Express.js project with Pug view engine and Stylus CSS preprocessor',
    command: 'npx express-generator PROJECT_NAME --view pug --css stylus',
  },
  {
    name: 'hbs-less',
    description: 'Create an Express.js project with Handlebars view engine and Less CSS preprocessor',
    command: 'npx express-generator PROJECT_NAME --view hbs --css less',
  },
]; 