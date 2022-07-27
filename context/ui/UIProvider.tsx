import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideMenuOpen: boolean;
  isAdding: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAdding: false
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Is adding entry', payload: isAdding });
  };

  return (
    <UIContext.Provider
      value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry }}
    >
      {children}
    </UIContext.Provider>
  );
};
