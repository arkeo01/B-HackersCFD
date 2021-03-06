import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
const Utils = require('./utils');


class OTP extends Component {

  handleOnClick = () =>  {
    var added = Utils.voterAdd();
  }

  render() {
    return (
    
        <div className="Login" alignContent="center" verticalAlign="center">
            <Grid.Row alignContent="center">
            <Grid.Col></Grid.Col>
            <Grid.Col cards deck width={4} verticalAlign="center">
                
            <Page.Card alignContent="center" verticalAlign="center"> 
            <Table verticalAlign="center">
                <h1>Enter your Fingerprint Hash</h1>
                    <Card>
                    <Form.InputGroup>
                        <Form.Input
                            name="hash"
                            placeholder="Enter your Fingerprint hash here..."
                            type="text"
                        />
                    <Form.InputGroupAppend>
                    <Button color="primary" type="button" onClick={this.handleOnClick}>Proceed</Button>
                    </Form.InputGroupAppend>
                  </Form.InputGroup>
                    </Card>
            </Table>
            </Page.Card>
            </Grid.Col>
            <Grid.Col></Grid.Col>
            </Grid.Row>
        </div>
        
    );
  }
}

export default OTP
