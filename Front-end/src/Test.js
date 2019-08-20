import React, { Component } from "react";

import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";

  class Test extends Component {
    render() {
      return (
      
          <div >
              <Page.Card>
                  <Grid.Row>
                      <Grid.Col></Grid.Col>
                  <Grid.Col cards deck width={4} verticalAlign="center">
                  
                  <Page.Card alignContent="center" verticalAlign="center"> 
                  <Table verticalAlign="center">
                      <h1>Enter ID</h1>
                          <Card >
                              <Form.Input
                                  name="AadharNo"
                                  placeholder="Enter your Aadhar No here..."
                                  type="text"
                              />
                              </Card>
                              <Card width={4}>
                              <Form.Input
                                  name="voterID"
                                  placeholder="Enter your PhoneNo here..."
                                  type="text"
                              />
                              </Card>
                          
                          <Button type="submit" color="primary" className="ml-auto">
                                  Next
                          </Button>   
                  </Table>
                  </Page.Card>
                  </Grid.Col>
                  <Grid.Col></Grid.Col>
                  
                  </Grid.Row>
              </Page.Card>
          </div>
          
      );
    }
  }

  
  
  export default Test