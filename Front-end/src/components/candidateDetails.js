import React, { Component } from "react";
import {Link} from "react-router-dom";

import "../tabler-react/dist/Tabler.css";
import '../utils';
 
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



function CandidateDetails(props) {
    return(          
      <Table.Row>
        <Table.Col alignContent="center">
          <Avatar
            imageURL="demo/faces/female/26.jpg"
            className="candidateProfile"
          />
        </Table.Col>
        <Table.Col>
          <div>{props.candidate.party}</div>
          <Text size="sm" muted>
            {/* Registered: Mar 19, 2018 */}
          </Text>
        </Table.Col>
        <Table.Col>
          <div className="clearfix">
            <div className="float-left">
            {props.candidate.candidateName}
            </div>
          </div>
          <div className="float-left">
              <Text.Small muted>
                Age: {props.candidate.age}
              </Text.Small>
            </div>
        </Table.Col>
        <Table.Col alignContent="center">
          <div>{props.candidate.constituencyName}</div>
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

export default CandidateDetails