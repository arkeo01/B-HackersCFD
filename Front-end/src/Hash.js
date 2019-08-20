import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
import './utils';
class OTP extends Component {
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
                        <Link to="/voterID/Success" color="primary" className="next">Verify</Link>  
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