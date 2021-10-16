import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import axiosSetup from './plugin/axios-setup';
import './plugin/i18n/index';
import './style/style.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

axiosSetup();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          ABOUT PAGE
        </Route>
        <Route path="/users">
          USERS PAGE
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
