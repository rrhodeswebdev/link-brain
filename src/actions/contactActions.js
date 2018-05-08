import { FETCH_ENTRIES, NEW_ENTRY, DELETE_ENTRY, ROW_SELECTED } from './types';

export function fetchEntries() {
  return function(dispatch) {
    //Make call to API once built
    //fetch('url')
    //.then(res => res.json())
    //.then(entries => dispatch({
    //type: FETCH_ENTRIES,
    //payload: entries
    //}));
  }
}

export const newEntry = entry => ({
  type: NEW_ENTRY,
  entry
});

export const selectRows = selectedRows => ({
  type: ROW_SELECTED,
  selectedRows
});

// export function newEntry(entry) {
//   return function(dispatch) {
//     console.log('Started dispatch to API for new entry!!!')
//     //Make call to API once built
//     //fetch('url', {
//     //method: 'POST',
//     //headers: {
//     //  'content-type':'application/json'
//     //},
//     //body: JSON.stringify(entry)
//     //})
//     //.then(res => res.json())
//     //.then(entry => dispatch({
//     //type: NEW_ENTRY,
//     //payload: entry
//     //}));
//   }
// }

export function deleteEntry(entry) {
  return function(dispatch) {
    // fetch('url', {
    //   method: 'DELETE',
    //   headers: {
    //     'content-type':'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(entry => dispatch({
    //   type:DELETE_ENTRY,
    //   payload: entry
    // }))
  }
}