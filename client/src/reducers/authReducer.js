import { FETCH_USER } from "../actions/types";
// We'll have 3 states in the auth reducers
// Null means we are waiting for a request to be finished - default state
// User model means we've received the user and are logged in
// False means we are not logged in
export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
