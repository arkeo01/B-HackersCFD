import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath,Link } from "react-router-dom";

import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";

import Aadhar from "./Aadhar";
import OTP from "./OTP";
import Hash from "./Hash";
import Success from "./RequestGenerated";
import Nomination from './Nomination';
import VoterValidation from "./VoterValidation";
import ConstiuencyCreation from "./ConstiuencyCreation";
import CandidateValidation from "./CandidateValidation";

class AdminPanel extends Component {
  
  render() {
    return (
      
        <div className="Login" alignContent="center" verticalAlign="center">
              <Grid.Row alignContent="center">
              <Grid.Col cards deck width={4} verticalAlign="center">
                  
              <Page.Card alignContent="center" verticalAlign="center"> 
              <Table verticalAlign="center">
              <Table.Row >
                    <Table.Col alignContent="center">
                    <h1>Voter Validation</h1>
                    </Table.Col>
                  </Table.Row> 
                  <Table.Row>
                      <Table.Col alignContent="center">
                      
                      <Link to="/adminPanel/voterValidation" color="primary" className="next">Start</Link>
                      </Table.Col>
                      </Table.Row>   
              </Table>
              </Page.Card>
              </Grid.Col>
              <Grid.Col cards deck width={4} verticalAlign="center">
                  
              <Page.Card alignContent="center" verticalAlign="center"> 
              <Table verticalAlign="center">
                  <Table.Row >
                    <Table.Col alignContent="center">
                    <h1>Candidate Nomination Verification</h1>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                      <Table.Col alignContent="center">
                      
                      <Link to="/adminPanel/candidateValidation" color="primary" className="next">Start</Link>
                      </Table.Col>
                      </Table.Row>   
              </Table>
              </Page.Card>
              </Grid.Col>
              <Grid.Col cards deck width={4} verticalAlign="center">
                  
              <Page.Card alignContent="center" verticalAlign="center"> 
              <Table verticalAlign="center">
                  <Table.Row >
                    <Table.Col alignContent="center">
                    <h1>Constiuency Creation</h1>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                      <Table.Col alignContent="center">
                      
                      <Link to="/adminPanel/constiuencyCreation" color="primary" className="next">Start</Link>
                      </Table.Col>
                      </Table.Row>   
              </Table>
              </Page.Card>
              </Grid.Col>
              </Grid.Row>
        
        <Switch>
    <Route path="/adminPanel" exact render={() => <div></div> }/>
          <Route path="/adminPanel/voterValidation" component={VoterValidation} />
          <Route path="/adminPanel/candidateValidation" component={CandidateValidation} />
          <Route path="/adminPanel/constiuencyCreation" component={ConstiuencyCreation} />
        </Switch>
          </div>
    );
  }
}

export default AdminPanel;