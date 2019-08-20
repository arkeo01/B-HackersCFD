import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./tabler-react/dist/Tabler.css";
import './utils';
 

import {
    Page,
    Avatar,
    Icon,
    Grid,
    Card,
    Text,
    Table,
    Alert,
    Progress,
    colors,
    Dropdown,
    Button,
    StampCard,
    StatsCard,
    ProgressCard,
    Badge,
    Form
  } from "tabler-react";

function CandidateDetail() {
    return(
              
                
                  <Table.Row>
                    <Table.Col alignContent="center">
                      <Avatar
                        imageURL="demo/faces/female/26.jpg"
                        className="candidateProfile"
                      />
                    </Table.Col>
                    <Table.Col>
                      <div>BJP</div>
                      <Text size="sm" muted>
                        {/* Registered: Mar 19, 2018 */}
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                        Modi Ji
                        </div>
                      </div>
                      <div className="float-left">
                          <Text.Small muted>
                            Age: 22
                          </Text.Small>
                       </div>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <div>Vadodara</div>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Text size="sm" muted>
                        {/* Click here to vote */}
                      </Text>
                      <Form.SelectGroupItem color="primary" name="vote" label="Select" value="modi" />
                    </Table.Col>
                  </Table.Row>
              
    )
}

class Ballot extends React.Component {
    render() {
        return(
            <Grid.Row cards deck>
            <Grid.Col width={12}>
                <div >
                <Page.Content title="Candidates">
                    <Card>
                            <Table
                                responsive
                                highlightRowOnHover
                                hasOutline
                                verticalAlign="center"
                                cards
                                className="text-nowrap"
                            >
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColHeader alignContent="center" className="w-1">
                                        <i className="icon-people" />
                                        </Table.ColHeader>
                                        <Table.ColHeader>Party</Table.ColHeader>
                                        <Table.ColHeader >Name</Table.ColHeader>
                                        <Table.ColHeader alignContent="center">
                                        constituency
                                        </Table.ColHeader>
                                        <Table.ColHeader alignContent="center">
                                        Vote
                                        </Table.ColHeader>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <CandidateDetail />
                                    <CandidateDetail />
                                </Table.Body>
                                
                            </Table>
                </Card>
                <Link to="/vote/success" color="primary" className="next">Vote</Link>
                </Page.Content>
                </div>
            </Grid.Col>
        </Grid.Row>
        )
    }
}

export default Ballot