import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import VoterID from './VoterID'
import Nomination from './Nomination'
import Vote from './Vote'
import AdminPanel from './AdminPanel'
import Result from './Result


const Utils = require('./utils')


class App extends React.Component {
  
	constructor(){
		super()
	}

	componentDidMount(){
		Utils.setProvider()
	}

	render() {
		return (
			< BrowserRouter>
			<div>
				<div className="links">
					<Link to="/" className="link">
						Home
					</Link>
					<Link to="/voterID" className="link">
						Voter Registeration
					</Link>
					<Link to="/nomination" className="link">
						Candidate Nomination
					</Link>
					<Link to="/vote" className="link">
						Cast your vote
					</Link>
					<Link to="/adminPanel" className="link">
						Admin Panel  
					</Link>
					<Link to="/result" className="link">
					  Result
					</Link>
				</div>

				<div className="tabs">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/voterID" component={VoterID} />
					<Route path="/nomination" component={Nomination} />
					<Route path="/vote" component={Vote} />
					<Route path="/adminPanel" component={AdminPanel} />
          				<Route path="/result" component={Result} />
				</Switch>
				</div>

			</div>
			</BrowserRouter>
		);
  	}

}




export default App;
