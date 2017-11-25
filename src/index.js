import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import SearchBar from "./components/SearchBar";
import VideoEmbed from "./components/VideoEmbed";
import Videos from "./components/Videos";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <main id="ultramain">
        <Route path="/" component={SearchBar} />
        <Container>
          <Switch>
            <Route path="/" exact component={Videos} />
            <Route path="/show/:id" component={VideoEmbed} />
          </Switch>
        </Container>
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
