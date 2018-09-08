import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
// React and redux weren't built with both in mind so need react-redux
// The connect function allows certain components to call action creators
import { connect } from "react-redux";
// take all actions and define them on the actions var
import * as actions from "../actions";

const Dashboard = () => <h2>Dashboard </h2>;
const SurveyNew = () => <h2>SurveyNew </h2>;

/*
BrowserRouter must have one child - cannot have two divs
use exact = true for strict path matching
*/
class App extends Component {
  // By convention componentDidMount is used for making initial ajax requests
  // There's no performance difference between didMount and willMount
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// connect first param is for map state to props
// second param is for action creators
// and then assigned to App component
export default connect(
  null,
  actions
)(App);
