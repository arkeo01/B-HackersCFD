import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./tabler-react/dist/Tabler.css";

 

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
                      <div>Satoshi Nakamoto</div>
                      <Text size="sm" muted>
                        {/* Registered: Mar 19, 2018 */}
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                        1029384756
                        </div>
                      </div>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                        SETW8BVW5VBS98759Y229
                        </div>
                      </div>
                    </Table.Col>
                    <Table.Col alignContent="center">
                    <i class="fe fe-check-circle"></i>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Text size="sm" muted>
                        {/* Click here to vote */}
                      </Text>
                      <Button color="secondary" name="vote" label="Assign" value="modi">Assign</Button>
                    </Table.Col>
                  </Table.Row>
              
    )
}

class VoterValidation extends React.Component {
    render() {
        return(
            <Grid.Row cards deck>
            <Grid.Col width={12}>
                <div >
                <Page.Content title="Voter Validation">
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
                                        <Table.ColHeader>Name</Table.ColHeader>
                                        <Table.ColHeader >Aadhar ID</Table.ColHeader>
                                        <Table.ColHeader >Hash</Table.ColHeader>
                                        <Table.ColHeader alignContent="center">
                                        Aadhar Verification
                                        </Table.ColHeader>
                                        <Table.ColHeader alignContent="center">
                                        Assign Vo-Token
                                        </Table.ColHeader>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <CandidateDetail />
                                    <CandidateDetail />
                                </Table.Body>
                                
                            </Table>
                </Card>
                </Page.Content>
                </div>
            </Grid.Col>
        </Grid.Row>
        )
    }
}

export default VoterValidation