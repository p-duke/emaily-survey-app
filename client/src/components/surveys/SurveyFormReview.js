import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div className="row">
        <div className="input-field col s12">
          <label className="active">{label}</label>
          <input value={formValues[name]} style={{ marginBottom: "5px" }} />
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div style={{ height: "50px" }}></div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

// whatever you return in the mapStateToProps function will be added as props to the component
// from the state. So formValues is being passed as a prop to SurveyFormReview.
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
// since we wrap withRouter SurveyFromReview knows about the history object on react router
export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
