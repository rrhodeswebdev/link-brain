import { FETCH_ENTRIES, NEW_ENTRY } from './types';

export function fetchEntries() {
  return function(dispatch) {
    //Make call to API once built
    //fetch('url')
    //.then(res => res.json())
    //.then(entries => dispatch({
    //type: FETCH_ENTRIES
    //payload: entries
    //}));
  }
}

export function newEntry(entry) {
  return function(dispatch) {
    //Make call to API once built
    //fetch('url', {
    //method: 'POST',
    //headers: {
    //  'content-type':'application/json'
    //},
    //body: JSON.stringify(entry)
    //})
    //.then(res => res.json())
    //.then(entry => dispatch({
    //type: NEW_ENTRY
    //payload: entry
    //}));
  }
}