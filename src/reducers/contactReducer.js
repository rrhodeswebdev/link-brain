import { FETCH_ENTRIES, NEW_ENTRY, DELETE_ENTRY, ROW_SELECTED } from '../actions/types';

const initialState = {
  entries: [
    {
      name: 'Ryan Rhodes',
      email: 'ryanrhodes@gmail.com',
      website: 'rrhodesdev.com',
      linkurl: 'rrhodes.com/blog/funny',
      campaign: 'Campaign 1',
      status: 'New Contact',
      notes: 'This is a simple note that has been added',
      date: '04/28/2018',
      id: 1
    },
    {
      name: 'Alaska John',
      email: 'akjohn@gmail.com',
      website: 'alaska.org',
      linkurl: 'alaska.org/blog/cool-bear-stories',
      campaign: 'Campaign 6',
      status: 'Waiting on Response',
      notes: 'This is a simple note that has been added',
      date: '05/01/2018',
      id: 2
    },
    {
      name: 'Maria Gloss',
      email: 'rmgloss@outlook.com',
      website: 'mediaads.com',
      linkurl: 'mediaads.com/tutorials/',
      campaign: 'Campaign 4',
      status: 'Awaiting Response',
      notes: '',
      date: '04/17/2018',
      id: 3
    }
  ],
  entry: {},
  selectedRows: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ENTRIES: 
      return {
        ...state, 
        entries: action.payload
      };
    case NEW_ENTRY:
      return {
        ...state,
        entry: action.payload,
        entries: [...state.entries, action.entry]
      };
    case DELETE_ENTRY:
      return {
        ...state,
      };
    case ROW_SELECTED:
      return {
        ...state,
        selectedRows: action.selectedRows
      }
    default: 
      return state;
  }
}