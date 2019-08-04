import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
// field component can handle any type of html form element
// swiss army knife of fields if you provide certain props
// you could also replace the component prop with a custom component you create
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

// we supply onSubmit the handleSubmit redux-form helper that will call
// our function
// any data stored with redux-form will put it under the key of the Field name
class SurveyForm extends Component {
  // if you use a function to return a list of html elements it needs to be in an array
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <div style={{ height: "50px"}}></div>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // if we return an empty errors object redux-form will
  // assume that the input is valid
  const errors = {};
  // when we add a error to a particular field name redux-form will automatically apply that as a
  // prop on the Field component. You just need to match the error property to the field name

  // this handles our email validation specifically in a separate function
  errors.recipients = validateEmails(values.recipients || "");

  // this will overwrite the email validation if its just blank
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

// destroyOnUnmount will keep previous form values around
// surveyForm will be the key that reduxForm uses to map all the values/info
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
