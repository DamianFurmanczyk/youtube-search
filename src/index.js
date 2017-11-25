import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/_Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import rootReducer from "./reducers";

import SearchBar from "./components/SearchBar";
import VideoEmbed from "./components/dumb/VideoEmbed";
import Videos from "./components/Videos";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Videos} />
          <Route path="/video/:id" component={VideoEmbed} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
