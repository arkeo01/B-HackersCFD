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

class VoterValidation extends React.Component {

  handleOnClick = (address) =>  {
    var added = Utils.voterValidation(address);
  }

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
                        <Table.Row>
                              <Table.Col alignContent="center">
                                <Avatar
                                  imageURL="demo/faces/female/26.jpg"
                                  className="candidateProfile"
                                />
                              </Table.Col>
                              <Table.Col>
                                <div>Suresh Kumar</div>
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
                                  ADC9207A4A88EE98BF9DDF0330F35818386F1ADC006BC8E
                                  </div>
                                </div>
                              </Table.Col>
                              <Table.Col alignContent="center">
                              <i class="fe fe-check-circle"></i>
                              </Table.Col>
                              <Table.Col alignContent="center">
                              <Button color="primary" type="button" onClick={() => {this.handleOnClick(0x417A72D06BF3f9E824d4ACAbc2e27C53E9a36F0e)}} name="vote" label="Assign" value="modi">Assign</Button>
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
                              <div>Champa Devi</div>
                              <Text size="sm" muted>
                                {/* Registered: Mar 19, 2018 */}
                              </Text>
                            </Table.Col>
                            <Table.Col>
                              <div className="clearfix">
                                <div className="float-left">
                                1097564756
                                </div>
                              </div>
                            </Table.Col>
                            <Table.Col>
                              <div className="clearfix">
                                <div className="float-left">
                                B5268DC93E08D68D0BE26BD8FBBB15C7B7F805CC06B4ABD
                                </div>
                              </div>
                            </Table.Col>
                            <Table.Col alignContent="center">
                            <i class="fe fe-check-circle"></i>
                            </Table.Col>
                            <Table.Col alignContent="center">
                              <Button color="secondary" type="button" onClick={() => {this.handleOnClick(0xa4210753a3ad3891FDCcA9BA998a924141371f5e)}} name="vote" label="Assign" value="modi">Assign</Button>
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

export default VoterValidation