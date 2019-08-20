import React, { Component } from "react";
import {Link} from "react-router-dom";
 
import "./tabler-react/dist/Tabler.css";
import './utils';
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
 
class RequestGenerated extends Component {
  render() {
    return (
    
        <div className="Login">
            <Grid.Row alignContent="center">
            <Grid.Col></Grid.Col>
            <Grid.Col cards deck>
                
            <Page.Card alignContent="center" > 
            <Table verticalAlign="center">
                <Table.Row>
                    <Table.Col alignContent="center">
                <h1>You casted your vote successfully.</h1>
                <Link to="/vote" color="primary" className="next">Home</Link>
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

export default RequestGenerated