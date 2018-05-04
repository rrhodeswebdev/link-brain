import { FETCH_ENTRIES, NEW_ENTRY, DELETE_ENTRY } from '../actions/types';

const initialState = {
  entries: [
    {
      name: 'Ryan Rhodes',
      email: 'ryanrhodes@gmail.com',
      website: 'rrhodesdev.com',
      linkurl: 'rrhodes.com/blog/funny',
      campaign: 'Campaign 1',
      status: 'New Contact',
      note: 'This is a simple note that has been added',
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
      note: 'This is a simple note that has been added',
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
      note: '',
      date: '04/17/2018',
      id: 3
    }
  ],
  entry: {},
  formOpen: false
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
        entry: action.payload
      }
    case DELETE_ENTRY:
      return {
        ...state,
      }
    default: 
      return state;
  }
}