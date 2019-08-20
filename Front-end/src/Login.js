import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
import './utils';
 
class MyCard extends Component {
  render() {
    return (
    
        <div className="Login" alignContent="center" verticalAlign="center">
            <Grid.Row alignContent="center">
            <Grid.Col></Grid.Col>
            <Grid.Col cards deck width={4} verticalAlign="center">
                
            <Page.Card alignContent="center" verticalAlign="center"> 
            <Table verticalAlign="center">
                <h1>Login</h1>
                    
                        <h4>Voter ID</h4>
                        <Form.Input
                            name="voterID"
                            placeholder="Enter your unique Voter ID here..."
                            type="text"
                        />
                        <br></br>
                        <h4>Fingerprint Hash</h4>
                        <Form.Input
                            name="hash"
                            placeholder="Enter your fingerprint hash here..."
                            type="text"
                        />
                        <br></br>
                    <Link to="/vote/ballot" color="primary" className="next">Login</Link>
            </Table>
            </Page.Card>
            </Grid.Col>
            <Grid.Col></Grid.Col>
            </Grid.Row>
        </div>
        
    );
  }
}

export default MyCard