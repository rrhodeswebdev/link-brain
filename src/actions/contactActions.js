import {
  FETCH_ENTRIES,
  NEW_ENTRY,
  DELETE_ENTRY,
  ROW_SELECTED,
  EDIT_ENTRY,
  LOAD_ENTRY,
  FETCH_USER_CONTACTS,
  ACTIVE_CONTACT,
  ACTIVE_CONTACT_REMOVE
} from "./types";
import { API_BASE_URL } from "../config";

// const token = window.localStorage.getItem("token");

export const fetchEntries = campaign => dispatch =>
  fetch(`${API_BASE_URL}/api/campaign/${campaign._id}`, {
    method: "GET",
    headers: new Headers({
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(contacts =>
      dispatch({
        type: FETCH_ENTRIES,
        contacts
      })
    );

export const fetchAllContacts = () => dispatch =>
  fetch(`${API_BASE_URL}/api/contacts`, {
    method: "GET",
    headers: new Headers({
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(contacts =>
      dispatch({
        type: FETCH_USER_CONTACTS,
        contacts
      })
    );

export const newEntry = entry => dispatch =>
  fetch(`${API_BASE_URL}/api/contacts`, {
    method: "POST",
    body: JSON.stringify(entry),
    headers: new Headers({
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(entry =>
      dispatch({
        type: NEW_ENTRY,
        entry
      })
    );

export const selectRows = selectedRows => ({
  type: ROW_SELECTED,
  selectedRows
});

export const deleteEntries = selected => dispatch =>
  fetch(`${API_BASE_URL}/api/contact/${selected}`, {
    method: "DELETE",
    headers: new Headers({
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(selected =>
      dispatch({
        type: DELETE_ENTRY,
        selected
      })
    );

export const activeContact = entry => ({
  type: ACTIVE_CONTACT,
  entry
});

export const activeContactRemove = () => ({
  type: ACTIVE_CONTACT_REMOVE
});

export const editEntry = entry => dispatch =>
  fetch(`${API_BASE_URL}/api/contact/${entry._id}`, {
    method: "PUT",
    body: JSON.stringify(entry),
    headers: new Headers({
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(entry =>
      dispatch({
        type: EDIT_ENTRY,
        entry
      })
    );

export const loadEntry = data => ({
  type: LOAD_ENTRY,
  data
});
