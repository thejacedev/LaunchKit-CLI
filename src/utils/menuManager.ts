import inquirer from 'inquirer';
import { MenuItem } from '../types';
import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);

export class MenuManager {
  private mainMenu: MenuItem[] = [];
  private actionMap: Map<string, () => Promise<void>> = new Map();

  constructor(menu: MenuItem[]) {
    this.mainMenu = menu;
    this.buildActionMap(menu);
  }

  private buildActionMap(items: MenuItem[], prefix = ''): void {
    items.forEach((item, index) => {
      const key = `${prefix}${index}`;
      this.actionMap.set(key, item.action);
      
      if (item.subMenu) {
        this.buildActionMap(item.subMenu, `${key}-`);
      }
    });
  }

  private createMenuChoices(items: MenuItem[], isSubmenu: boolean, prefix = ''): { name: string; value: string; short: string }[] {
    const choices = items.map((item, index) => ({
      name: `${chalk.white(item.title)} ${chalk.gray('→')} ${chalk.gray(item.description)}`,
      value: `${prefix}${index}`,
      short: item.title
    }));

    if (isSubmenu) {
      choices.unshift({
        name: chalk.yellow('↩ Back to main menu'),
        value: 'BACK',
        short: 'Back'
      });
    }

    return choices;
  }

  private renderHeader(): void {
    console.clear();
    const title = `
╭───────────────────────────────────╮
│  ${chalk.cyan.bold('LaunchKit CLI - Project Creator')}  │
╰───────────────────────────────────╯\n`;
    console.log(title);
  }

  private async showMenu(items: MenuItem[], message: string, isSubmenu = false, prefix = ''): Promise<string | null> {
    this.renderHeader();
    
    const { choice } = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: chalk.cyan.bold(`🚀 ${message}`),
      choices: this.createMenuChoices(items, isSubmenu, prefix),
      pageSize: 8,
      loop: false
    });

    return choice === 'BACK' ? null : choice;
  }

  public async display(): Promise<void> {
    try {
      while (true) {
        const mainChoice = await this.showMenu(this.mainMenu, '📦 Select a framework:');
        
        if (!mainChoice) break;
        
        const mainItem = this.mainMenu[parseInt(mainChoice)];
        
        if (mainItem.subMenu) {
          const subChoice = await this.showMenu(
            mainItem.subMenu, 
            `🛠️  Select ${chalk.cyan(mainItem.title)} template:`,
            true,
            `${mainChoice}-`
          );
          
          if (subChoice) {
            this.renderHeader();
            console.log(chalk.gray('\n  Initializing project...\n'));
            const action = this.actionMap.get(subChoice);
            if (action) {
              await action();
            } else {
              throw new Error('Action not found for the selected menu item');
            }
            break;
          }
        }
      }
    } catch (error) {
      console.error(chalk.red('\n❌ An error occurred:'), error);
    }
  }

  public static async executeCommand(command: string): Promise<void> {
    try {
      console.log(chalk.cyan('\n  Executing command...'));
      console.log(chalk.gray(`  > ${command}\n`));
      
      const { stdout, stderr } = await execAsync(command);
      if (stdout) console.log(stdout);
      if (stderr) console.log(chalk.yellow(stderr));
      
      console.log(chalk.green('\n✨ Done! Happy coding!\n'));
    } catch (error) {
      console.error(chalk.red('\n❌ Error executing command:'), error);
    }
  }
} 