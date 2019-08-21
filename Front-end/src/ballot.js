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

const Utils = require('./utils');


class Ballot extends Component {
	//const candidateComponents = candidates.map(candidateItem => <CandidateDetails key={candidateItem.id}  candidate={candidateItem} />)

	handleOnClick = (candidateaddress) =>  {
		var added = Utils.voteforCandidate(candidateaddress, 12);
	}

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
										Aatishi Gambhir
										</div>
									</div>
									<div className="float-left">
										<Text.Small muted>
											Age: 47
										</Text.Small>
										</div>
									</Table.Col>
									<Table.Col alignContent="center">
									<div>East Delhi</div>
									</Table.Col>
									<Table.Col alignContent="center">
										
									<Button color="primary" type="button" onClick={() => {this.handleOnClick1(0xDcbaf563b81Ee5D2341E9Fa89761c4A53a82a956)}}>Vote</Button>

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
									<div>AAP</div>
									<Text size="sm" muted>
										{/* Registered: Mar 19, 2018 */}
									</Text>
									</Table.Col>
									<Table.Col>
									<div className="clearfix">
										<div className="float-left">
										Gautam Marlena
										</div>
									</div>
									<div className="float-left">
										<Text.Small muted>
											Age: 35
										</Text.Small>
										</div>
									</Table.Col>
									<Table.Col alignContent="center">
									<div>East Delhi</div>
									</Table.Col>
									<Table.Col alignContent="center">

									<Button color="primary" type="button" onClick={() => {this.handleOnClick1(0x323c117FFBe6C4D33Be10dB1e38dE8abF66C1Cf2)}}>Vote</Button>

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
									<div>INC</div>
									<Text size="sm" muted>
										{/* Registered: Mar 19, 2018 */}
									</Text>
									</Table.Col>
									<Table.Col>
									<div className="clearfix">
										<div className="float-left">
										Jaspreet Singh Lovely
										</div>
									</div>
									<div className="float-left">
										<Text.Small muted>
											Age: 56
										</Text.Small>
										</div>
									</Table.Col>
									<Table.Col alignContent="center">
									<div>East Delhi</div>
									</Table.Col>
									<Table.Col alignContent="center">
									
									<Button color="primary" type="button" onClick={() => {this.handleOnClick1(0x2aF585f0fd5bD3931F8CA94e240Adea082Cf3661)}}>Vote</Button>
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

export default Ballot