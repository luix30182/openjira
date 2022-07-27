import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Inprogress Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusamus deserunt quasi porro blanditiis possimus nihil molestias earum, voluptates hic debitis culpa natus maiores vero enim eaque odit provident? Incidunt?',
      status: 'in-progess',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description:
        'FINISHED Lorem ipsum dolor sit amet consectetur, adipisicing elit. ero enim eaque odit provident? Incidunt?',
      status: 'finished',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description:
        'PENDING Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusamus deserunt quasi porro',
      status: 'pending',
      createdAt: Date.now()
    }
  ]
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    };

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
