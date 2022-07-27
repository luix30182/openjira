import { EntriesState } from './';
import { Entry } from '../../interfaces/entry';

type EntriesActionTipe = { type: '[Entry] - Add-Entry'; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionTipe
): EntriesState => {
  switch (action.type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      };

    default:
      return state;
  }
};
