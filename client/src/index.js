// When not importing JS files you need to specify the extension
// Also when you don't specify a relative path like ./ webpack will assume you are referring to node modules
// We don't assign the css to a variable because that does nothing. So just simply import
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
