import React, { Component } from "react";
 
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
import './utils';
 
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
                <h1>Request Generated</h1>
                    <Button type="submit" color="primary" className="ml-auto">
                            Home
                    </Button>
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