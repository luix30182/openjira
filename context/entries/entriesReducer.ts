import { EntriesState } from './';

type EntriesActionTipe = { type: '[Entries] - ActionName' };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionTipe
): EntriesState => {
  switch (action.type) {
    case '[Entries] - ActionName':
      return {
        ...state
      };

    default:
      return state;
  }
};
