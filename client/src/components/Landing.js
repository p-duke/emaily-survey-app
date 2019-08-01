import React from "react";

// when adding inline css the first { indicates js and the second {
// indicates we're passing in an object
const Landing = () => {
  return (
    <div className="container">
      <h2 className="center-align">Welcome to Emaily!</h2>
      <div className="row">

        <div className="col s4 center-align">
          <div className="card-panel teal lighten-2">
            <i className="large material-icons white-text">cached</i>
            <h5 className="white-text">Connect with Users</h5>
            <p className="white-text">Send out surveys to your users to collect feedback.</p>
          </div>
        </div>

        <div className="col s4 center-align">
          <div className="card-panel teal lighten-2">
            <i className="large material-icons white-text">people</i>
            <h5 className="white-text">Target Core Audiences</h5>
            <p className="white-text">Create tailored questionnaires for specific audiences.</p>
          </div>
        </div>

        <div className="col s4 center-align">
          <div className="card-panel teal lighten-2">
            <i className="large material-icons white-text">directions_boat</i>
            <h5 className="white-text">Ship Better Code</h5>
            <p className="white-text">A shorter feedback loop could speed up your release schedules.</p>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col s4">
          <a href="/auth/google" class="waves-effect waves-light btn-large teal darken-1">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
