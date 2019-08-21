import React, { Component } from "react";
import { Link,Prompt } from "react-router-dom";
import "./tabler-react/dist/Tabler.css";
import { Formik } from "formik";
 
import { Page, Card, Grid, Form, Button, Dropdown,Table } from "tabler-react";

 
class ConstituencyCreation extends Component {
    state = {
        submitted: false,
      };
      
      handleSubmit = () => {
        this.setState(
          {
            submitted: true,
          },
          () => this.props.history.push("/"),
        );
      };
      
  render() {
    return (
        
    
        <div className="Login" alignContent="center" verticalAlign="center">
            <Prompt
        when={this.state.submitted}
        message={"The Constituency is Created"}
      />
            <Grid.Row alignContent="center">
            <Grid.Col></Grid.Col>
            <Grid.Col cards deck width={4} verticalAlign="center">   
            <Page.Card alignContent="center" verticalAlign="center"> 
            <Table verticalAlign="center">
                <h1>Constiuency Creation</h1>
                <Formik
          initialValues={{
            pinCode: "",
            name: "",
            id: 0 ,

          }}
          onSubmit={this.handleSubmit}
        >
                    <Form.FieldSet>
                        <Form.Group label="Pin Code" isRequired>
                            <Form.Input name="pinCode" />
                        </Form.Group>
                        <Form.Group label="Constituency Name" isRequired>
                            <Form.Input name="name" />
                        </Form.Group>
                        <Form.Group label="Constituency ID" isRequired>
                            <Form.Input name="id" />
                        </Form.Group>
                        <Link to="adminPanel/constiuencyCreation" color="primary" className="next">Create Constituency</Link>
                    </Form.FieldSet>
                    </Formik>
            </Table>
            </Page.Card>
            </Grid.Col>
            <Grid.Col></Grid.Col>
            </Grid.Row>
        </div>
        
    );
  }
}

export default ConstituencyCreation