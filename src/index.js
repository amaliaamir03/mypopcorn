import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import popular from "./popular";
import toprated from './toprated';
import tvshows from './tvshows';
import genres from './genres';

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={home} />
        <Route path="/popular" component={popular} />
        <Route path="/home" component={home} />
        <Route path="/toprated" component={toprated} />
        <Route path="/tvshows" component={tvshows} />
        <Route path="/genres" component={genres} />
      </Switch>
      </BrowserRouter>,
      rootElement
      );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();