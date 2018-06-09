import { SIGN_IN_USER, SIGN_UP_USER } from "./types";
import { API_BASE_URL } from "../config";

export const signInUser = user => dispatch => {
  fetch(`${API_BASE_URL}/auth/sign-in`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "content-type": "application/json"
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      window.localStorage.setItem("token", res.authToken);
    })
    .then(user =>
      dispatch({
        type: SIGN_IN_USER,
        user
      })
    );
};

export const signUpUser = user => dispatch => {
  fetch(`${API_BASE_URL}/api/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "content-type": "application/json"
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.code && res.code === "400") {
        return Promise.reject(res.statusText);
      } else {
        return fetch(`${API_BASE_URL}/auth/sign-in`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: new Headers({
            "content-type": "application/json"
          })
        });
      }
    })
    .then(res => res.json())
    .then(res => {
      window.localStorage.setItem("token", res.authToken);
    })
    .then(user =>
      dispatch({
        type: SIGN_UP_USER,
        user
      })
    );
};
