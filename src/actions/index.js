import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

// redux-thunk allows returning function and passing dispatch method into it
// dispatch forwards actions to reduxers -- like a pipeline
// redux thunk allows to dispatch multiple actions
export function signInUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server
    axios.post(`${ROOT_URL}/signin`, { email, password});
    // If req is good
    // - update state to indicate user authenticated
    // - save jwt token
    // = redirect to route '/feature'

    // If req bad
    // - Show an error to user

  }

}
