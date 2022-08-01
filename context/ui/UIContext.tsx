import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  startDraggind: () => void;
  endDraggind: () => void;
}

export const UIContext = createContext({} as ContextProps);
