import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";

import Login from "./Login";
import Ballot from "./ballot";
import Cast from "./Cast";
import './utils';

class Vote extends Component {
  state = {
    submitted: false,
  };
  
  handleSubmit = () => {
    this.setState(
      {
        submitted: true,
      },
      () => this.props.history.push("/"),
    );
  };

  render() {
    return (
      <div>
        <Prompt
          when={!this.state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/vote" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        />
        <Formik
          initialValues={{
            voterID: "",
            hash: "",
            vote: "",
          }}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <Switch>
              <Redirect from="/vote" exact to="vote/login" />
              <Route path="/vote/login" component={Login} />
              <Route path="/vote/ballot" component={Ballot} />
              <Route path="/vote/success" component={Cast} />
            </Switch>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Vote;