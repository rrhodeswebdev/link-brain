import { SIGN_IN_USER, SIGN_UP_USER } from './types';

export const signInUser = (user) => dispatch => {
  fetch('http://localhost:5000/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(res => {
    window.localStorage.setItem('token', res.authToken)
  })
  .then(user => dispatch({
    type: SIGN_IN_USER,
    user
  }))
};

export const signUpUser = (user) => dispatch => {
  fetch('http://localhost:5000/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then(res => res.json())
  .then(res => {
    if(res.code && res.code === '400') {
      return Promise.reject(res.statusText)
    } else {
      return fetch('http://localhost:5000/auth/sign-in', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
          'content-type': 'application/json',
        })
      })
    }
  })
  .then(res => res.json())
  .then(res => {
    window.localStorage.setItem('token', res.authToken)
  })
  .then(user => dispatch({
    type: SIGN_UP_USER,
    user
  }))
}