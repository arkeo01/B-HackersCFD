import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";

import CandidateForm from "./CandidateForm";
import Success from "./RequestGenerated";
import './utils';

class Nomination extends Component {
	constructor(){
		super()
	}
	
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
		<div>
			<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				age: 0 ,
				partyAffiliation: "",
				constituency: "",

			}}
			onSubmit={this.handleSubmit}
			>
			<Form>
				<Switch>
				<Redirect from="/nomination" exact to="nomination/candidateForm" />
				<Route path="/nomination/candidateForm" component={CandidateForm} />
				<Route path="/nomination/Success" component={Success} />
				</Switch>
			</Form>
			</Formik>
		</div>
		);
	}
}

export default Nomination;