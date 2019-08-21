import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";

import "./tabler-react/dist/Tabler.css";

//import CandidateDetails from "./components/candidateDetails"
//import candidates from "./data/candidates"

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

// const Utils = require('./utils');


class Result extends Component {
	//const candidateComponents = candidates.map(candidateItem => <CandidateDetails key={candidateItem.id}  candidate={candidateItem} />)

	// handleOnClick1 = (candidateaddress) =>  {
	// 	var added = Utils.voteforCandidate(candidateaddress, 12);
	// 	return <Redirect to="/voterID/Success" />     //This Router is not working will have ot fix this
	// }

	// handleOnClick2 = (candidateaddress) =>  {
	// 	var added = Utils.voteforCandidate(candidateaddress, 12);
	// 	return <Redirect to="/voterID/Success" />     //This Router is not working will have ot fix this
	// }

	// handleOnClick3 = (candidateaddress) =>  {
	// 	var added = Utils.voteforCandidate(candidateaddress, 12);
	// 	return <Redirect to="/voterID/Success" />     //This Router is not working will have ot fix this
	// }

	render() {
		return(
			<Grid.Row cards deck>
			<Grid.Col width={12}>
				<div >
				<Page.Content title="Results">
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
									<Table.ColHeader >Party</Table.ColHeader>
									<Table.ColHeader alignContent="center">
									Constituency
									</Table.ColHeader>
									<Table.ColHeader alignContent="center">
									No. of Votes
									</Table.ColHeader>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									{/* <<Button color="primary" type="button" onClick={this.handleOnClick1}>Vote</Button> */}
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
										BJP
										</div>
									</div>
									</Table.Col>
									<Table.Col alignContent="center">
									<div>East Delhi</div>
									</Table.Col>
									<Table.Col alignContent="center">
                                    6,96,158
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
										AAP
										</div>
									</div>
									</Table.Col>
									<Table.Col alignContent="center">
									<div>East Delhi</div>
									</Table.Col>
									<Table.Col alignContent="center">
                                    3,04,934
									{/* <Button color="primary" type="button" onClick={this.handleOnClick2}>Vote</Button> */}

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
										INC
										</div>
									</div>
									</Table.Col>
									<Table.Col alignContent="center">
									<div>East Delhi</div>
									</Table.Col>
									<Table.Col alignContent="center">
									2,19,328
									{/* <Button color="primary" type="button" onClick={this.handleOnClick3}>Vote</Button> */}
									</Table.Col>
								</Table.Row>
							</Table.Body>
							
						</Table>
				</Card>
				</Page.Content>
				</div>
			</Grid.Col>
		</Grid.Row>
		);
	}

}

export default Result
