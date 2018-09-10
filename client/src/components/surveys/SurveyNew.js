import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showFormReview: false };
  }
  // if you wanted to you could refactor to below since create-react-app allows that shortcut
  // state = { formReview: true }
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// since we aren't specifying destroyOnUnmount when this component gets unmounted it will clear
// the form
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
