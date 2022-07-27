import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  isAdding: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
