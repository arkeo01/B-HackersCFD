import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";
const Utils = require('./utils');
 
class CandidateForm extends Component {
    constructor(){
        super()
    }
    
    handleOnClick = () =>  {
        var added = Utils.candidateAdd();
    }
    
    render() {
        return (
        
            <div className="Login" alignContent="center" verticalAlign="center">
                <Grid.Row alignContent="center">
                <Grid.Col></Grid.Col>
                <Grid.Col cards deck width={4} verticalAlign="center">
                    
                <Page.Card alignContent="center" verticalAlign="center"> 
                <Table verticalAlign="center">
                    <h1>Enter Details</h1>
                        <Form.FieldSet>
                            <Form.Group label="First Name" isRequired>
                                <Form.Input name="firstName" />
                            </Form.Group>
                            <Form.Group label="Last Name" isRequired>
                                <Form.Input name="lastName" />
                            </Form.Group>
                            <Form.Group label="Age" isRequired>
                                <Form.Input name="age" />
                            </Form.Group>
                            <Form.Group label="Fighting Constituency">
                                <Form.Input name="constituency" />
                            </Form.Group>
                            <Form.Group label="Affiliation to any Party" >
                                <Form.Input name="partyAffiliation" placeholder="Leave blank if none"/>
                            </Form.Group>
                            <Form.Group label="Upload required Documents">
                                <Form.FileInput />
                            </Form.Group>
                            <Button color="primary" type="button" onClick={this.handleOnClick}>Apply</Button>
                        </Form.FieldSet>
                </Table>
                </Page.Card>
                </Grid.Col>
                <Grid.Col></Grid.Col>
                </Grid.Row>
            </div>
            
        );
  }
}

export default CandidateForm