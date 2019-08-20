import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";

import Aadhar from "./Aadhar";
import OTP from "./OTP";
import Hash from "./Hash";
import Success from "./RequestGenerated";
import Nomination from './Nomination';

class VoterID extends Component {
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
            return matchPath(pathname, { path: "/VoterID" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        />
        <Formik
          initialValues={{
            aadharNo: "",
            phoneNo: "",
            OTP: "",
            hash: "",
          }}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <Switch>
              <Redirect from="/voterID" exact to="voterID/Aadhar" />
              <Route path="/voterID/Aadhar" component={Aadhar} />
              <Route path="/voterID/OTP" component={OTP} />
              <Route path="/voterID/Hash" component={Hash} />
              <Route path="/voterID/Success" component={Success} />
            </Switch>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default VoterID;