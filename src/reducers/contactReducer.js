import { FETCH_ENTRIES, NEW_ENTRY, DELETE_ENTRY, ROW_SELECTED, EDIT_ENTRY, LOAD_ENTRY } from '../actions/types';

const initialState = {
  entries: [],
  entry: null,
  selectedRows: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ENTRIES: 
      return {
        ...state, 
        entries: action.contacts
      };
    case NEW_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.entry]
      };
    case DELETE_ENTRY:
      let selectedItems = [...state.entries];
      if(Array.isArray(action.selected)) {
        selectedItems = selectedItems.filter((item, index) => {
          return !action.selected.includes(item.id)
        })
      }
      return {
        ...state,
        entries: selectedItems
      };
    case ROW_SELECTED:
      return {
        ...state,
        selectedRows: action.selectedRows
      }
    case EDIT_ENTRY:
      let entries = [...state.entries];
      let entryToUpdate = entries.findIndex((e) => {
        return e.id === action.entry.id
      })
      entries.splice(entryToUpdate, 1, action.entry)
      return {
        ...state,
        entries: entries,
        entry: null
      }
    case LOAD_ENTRY:
      return {
        ...state, 
        entry: action.data
      }
    default: 
      return state;
  }
}