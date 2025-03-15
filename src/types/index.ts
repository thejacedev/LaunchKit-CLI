export interface ProjectTemplate {
  name: string;
  description: string;
  command: string;
}

export interface MenuItem {
  title: string;
  description: string;
  action: () => Promise<void>;
  subMenu?: MenuItem[];
}

export type MenuSelection = {
  selectedIndex: number;
  isSubmenu: boolean;
} 