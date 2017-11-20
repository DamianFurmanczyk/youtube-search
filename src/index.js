import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/_Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
