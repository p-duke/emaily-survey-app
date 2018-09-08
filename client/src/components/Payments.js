// use this type of import when creating a class based component
import React, { Component } from "react";
// normally convention would be to import the entire name
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

// the amount in the StripeCheckout component is in cents use dollars
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => this.props.handleToken(token)}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
