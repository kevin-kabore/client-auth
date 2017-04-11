import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
  } from './types'

const ROOT_URL = 'http://localhost:3000';

// redux-thunk allows returning function and passing dispatch method into it
// dispatch forwards actions to reduxers -- like a pipeline
// redux thunk allows to dispatch multiple actions
export function signInUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server
    axios.post(`${ROOT_URL}/signin`, { email, password})
      .then(response => {
        // If req is good
        // - update state to indicate user authenticated
        dispatch({ type: AUTH_USER})
        // - save jwt token
        localStorage.setItem('token', response.data.token);
        // - redirect to route '/feature'

        browserHistory.push('/feature');
      })
      .catch(() => {
        // If req bad
        // - Show an error to user
        dispatch(authError('Bad Login Information'))
      })
  }
}

export function signupUser({email, password}) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password})
      .then( response => {
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature');
      })
      .catch(
        response => {
          // console.log(response.response.data.error);
          dispatch(authError(response.response.data.error))
        });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}
