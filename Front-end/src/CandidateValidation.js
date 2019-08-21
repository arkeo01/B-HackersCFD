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

  
  const Utils = require('./utils');



class CandidateValidation extends React.Component {
  handleOnClick = (address) =>  {
    var added = Utils.addCandidateToConstituency(12, address);
  }  
  
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
                                  <Table.Row>
                                      <Table.Col alignContent="center">
                                        <Avatar
                                          imageURL="demo/faces/female/26.jpg"
                                          className="candidateProfile"
                                        />
                                      </Table.Col>
                                      <Table.Col>
                                        <div>Aatishi Gambhir</div>
                                        <Text size="sm" muted>
                                          {/* Registered: Mar 19, 2018 */}
                                        </Text>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          47
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          East Delhi
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
                                        <Button color="primary" type="button" onClick={() => {this.handleOnClick(0xDcbaf563b81Ee5D2341E9Fa89761c4A53a82a956)}} name="vote" label="Assign" value="modi">Approve</Button>
                                      </Table.Col>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                      <Table.Col alignContent="center">
                                        <Avatar
                                          imageURL="demo/faces/female/26.jpg"
                                          className="candidateProfile"
                                        />
                                      </Table.Col>
                                      <Table.Col>
                                        <div>Gautam Marlena</div>
                                        <Text size="sm" muted>
                                          {/* Registered: Mar 19, 2018 */}
                                        </Text>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          35
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          East Delhi
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          AAP
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col alignContent="center">
                                      <i class="fe fe-check-circle"></i>
                                      </Table.Col>
                                      <Table.Col alignContent="center">
                                        <Button color="primary" type="button" onClick={() => {this.handleOnClick(0x323c117FFBe6C4D33Be10dB1e38dE8abF66C1Cf2)}} name="vote" label="Assign" value="modi">Approve</Button>
                                      </Table.Col>
                                    </Table.Row>

                                    <Table.Row>
                                      <Table.Col alignContent="center">
                                        <Avatar
                                          imageURL="demo/faces/female/26.jpg"
                                          className="candidateProfile"
                                        />
                                      </Table.Col>
                                      <Table.Col>
                                        <div>Jaspreet Singh Lovely</div>
                                        <Text size="sm" muted>
                                          {/* Registered: Mar 19, 2018 */}
                                        </Text>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          56
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          East Delhi
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col>
                                        <div className="clearfix">
                                          <div className="float-left">
                                          INC
                                          </div>
                                        </div>
                                      </Table.Col>
                                      <Table.Col alignContent="center">
                                      <i class="fe fe-check-circle"></i>
                                      </Table.Col>
                                      <Table.Col alignContent="center">
                                        <Button color="primary" type="button" onClick={() => {this.handleOnClick(0x2aF585f0fd5bD3931F8CA94e240Adea082Cf3661)}} name="vote" label="Assign" value="modi">Approve</Button>
                                      </Table.Col>
                                    </Table.Row>
                                    
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