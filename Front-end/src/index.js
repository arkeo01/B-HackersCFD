//require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home'
import VoterID from './VoterID'
import Nomination from './Nomination'
import Vote from './Vote'
import AdminPanel from './AdminPanel'
import './utils'

const rootElement = document.getElementById("root");

const routes = (
  < BrowserRouter>
    <div>
      
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/voterID" className="link">
          Voter Registeration
        </Link>
        <Link to="/nomination" className="link">
          Candidate Nomination
        </Link>
        <Link to="/vote" className="link">
          Cast your vote
        </Link>
        <Link to="/adminPanel" className="link">
          Admin Panel
        </Link>
      </div>

      <div className="tabs">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/voterID" component={VoterID} />
          <Route path="/nomination" component={Nomination} />
          <Route path="/vote" component={Vote} />
          <Route path="/adminPanel" component={AdminPanel} />
        </Switch>
      </div>

    </div>
  </BrowserRouter>
);

if (rootElement) {
  ReactDOM.render(routes, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}