import { FETCH_ENTRIES, NEW_ENTRY, DELETE_ENTRY, ROW_SELECTED, EDIT_ENTRY, LOAD_ENTRY, FETCH_USER_CONTACTS } from './types';

const token = window.localStorage.getItem('token');

export const fetchEntries = (campaign) => dispatch => (
  fetch(`http://localhost:5000/api/campaign/${campaign._id}`, {
    method: 'GET', 
    headers: new Headers ({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + token
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(contacts => dispatch({
    type: FETCH_ENTRIES,
    contacts
  }))
);

export const fetchAllContacts = () => dispatch => (
  fetch('http://localhost:5000/api/contacts', {
    method: 'GET',
    headers: new Headers ({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + token
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(contacts => dispatch({
    type:FETCH_USER_CONTACTS,
    contacts
  }))
);

export const newEntry = (entry) => dispatch => (
  fetch('http://localhost:5000/api/contacts', {
    method: 'POST',
    body: JSON.stringify(entry),
    headers: new Headers ({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + token
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(entry => dispatch({
    type: NEW_ENTRY,
    entry
  }))
);

export const selectRows = selectedRows => ({
  type: ROW_SELECTED,
  selectedRows
});

export const deleteEntries = (selected) => dispatch => (
  fetch(`http://localhost:5000/api/contact/${selected}`, {
    method: 'DELETE',
    headers: new Headers ({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + token
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(selected => dispatch({
    type: DELETE_ENTRY,
    selected
  }))
);

export const editEntry = (entry) => ({
  type: EDIT_ENTRY,
  entry
})

export const loadEntry = (data) => ({
  type: LOAD_ENTRY,
  data
})