import {
  FETCH_ENTRIES,
  NEW_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  LOAD_ENTRY,
  FETCH_USER_CONTACTS,
  ACTIVE_CONTACT,
  ACTIVE_CONTACT_REMOVE
} from "../actions/types";

const initialState = {
  entries: [],
  usercontacts: [],
  entry: null,
  activeContact: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ENTRIES:
      return {
        ...state,
        entries: action.contacts
      };
    case FETCH_USER_CONTACTS:
      return {
        ...state,
        usercontacts: action.contacts
      };
    case NEW_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.entry]
      };
    case ACTIVE_CONTACT:
      return {
        ...state,
        activeContact: action.entry
      };
    case ACTIVE_CONTACT_REMOVE:
      return {
        ...state,
        activeContact: null
      };
    case DELETE_ENTRY:
      let selectedItems = [...state.entries];
      if (Array.isArray(action.selected)) {
        selectedItems = selectedItems.filter((item, index) => {
          return !action.selected.includes(item.id);
        });
      }
      return {
        ...state,
        entries: selectedItems
      };
    case EDIT_ENTRY:
      let entries = [...state.entries];
      let entryToUpdate = entries.findIndex(e => {
        return e._id === action.entry._id;
      });
      entries.splice(entryToUpdate, 1, action.entry);
      return {
        ...state,
        entries: entries,
        entry: null
      };
    case LOAD_ENTRY:
      return {
        ...state,
        entry: action.data
      };
    default:
      return state;
  }
}
