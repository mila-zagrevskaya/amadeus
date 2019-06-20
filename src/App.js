import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import SomeBlock from "./components/hideBlock";
import Main from "./containers/main";
import About from "./containers/About-section"
import ItemPage from "./components/ItemPage";

export default class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/About" component={About} />
					<Route exact path="/profile" component={SomeBlock} />
					<Route
						exact
						path="/test"
						render={props => {
							return <div>TEST PAGe, Hello</div>;
						}}
					/>
				</Switch>
			</>
		);
	}
}
