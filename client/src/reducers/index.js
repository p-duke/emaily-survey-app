import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

// to use redux form we need to use the 'reducer' on a key called form specifically
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
