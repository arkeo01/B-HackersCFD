import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
import './utils';

  class Aadhar extends Component {
    render() {
      return (
      
          <div className="Login" alignContent="center" verticalAlign="center">
              <Grid.Row alignContent="center">
              <Grid.Col></Grid.Col>
              <Grid.Col cards deck width={4} verticalAlign="center">
                  
              <Page.Card alignContent="center" verticalAlign="center"> 
              <Table verticalAlign="center">
                  <Table.Row >
                  <h1>Enter ID</h1>
                  </Table.Row>
                  <Table.Row>
                      <Table.Col alignContent="center">
                      <Card >
                          <Form.Input
                              name="aadharNo"
                              placeholder="Enter your Aadhar No here..."
                              type="text"
                          />
                          </Card>
                          <Card width={4}>
                          <Form.Input
                              name="phoneNo"
                              placeholder="Enter your PhoneNo here..."
                              type="text"
                          />
                          </Card>
                      
                      <Link to="/voterID/OTP" color="primary" className="next">Next</Link>
                      </Table.Col>
                      </Table.Row>   
              </Table>
              </Page.Card>
              </Grid.Col>
              <Grid.Col></Grid.Col>
              </Grid.Row>
          </div>
          
      );
    }
  }
  
  export default Aadhar