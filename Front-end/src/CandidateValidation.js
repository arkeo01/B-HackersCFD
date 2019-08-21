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
                      <div>Modi Ji</div>
                      <Text size="sm" muted>
                        {/* Registered: Mar 19, 2018 */}
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                        23
                        </div>
                      </div>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                        Varanasi
                        </div>
                      </div>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                        BJP
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
                      <Button color="secondary" name="vote" label="Assign" value="modi">Approve</Button>
                    </Table.Col>
                  </Table.Row>
              
    )
}

class CandidateValidation extends React.Component {
    render() {
        return(
            <Grid.Row cards deck>
            <Grid.Col width={12}>
                <div >
                <Page.Content title="Candidate Nomination Verification">
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
                                        <Table.ColHeader >Age</Table.ColHeader>
                                        <Table.ColHeader >Constituency</Table.ColHeader>
                                        <Table.ColHeader >Party</Table.ColHeader>
                                        <Table.ColHeader alignContent="center">
                                        Document Verification
                                        </Table.ColHeader>
                                        <Table.ColHeader alignContent="center">
                                        Approve Candidate
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

export default CandidateValidation