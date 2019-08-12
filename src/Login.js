import React, { Component } from "react";
 
import "./tabler-react/dist/Tabler.css";
 
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";
 
class MyCard extends Component {
  render() {
    return (
    
        <div className="Login" alignContent="center" verticalAlign="center">
            <Grid.Col cards deck width={6} verticalAlign="center">
            <Page.Card> 
                <h1>Login</h1>
                    <Card >
                        <Form.Input
                            name="voterID"
                            placeholder="Enter your unique Voter ID here..."
                            type="text"
                        />
                    </Card>
                    <Button type="submit" color="primary" className="ml-auto">
                            Login
                    </Button>   
            </Page.Card>
            </Grid.Col>
        </div>
        
    );
  }
}

export default MyCard