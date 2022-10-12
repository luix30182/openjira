import { FC, useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { entriesapi } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: []
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const refreshEntries = async () => {
    const { data } = await entriesapi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] - Refresh-data', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesapi.post<Entry>('/entries', { description });
    dispatch({ type: '[Entry] - Add-Entry', payload: data });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Entry updated', payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
