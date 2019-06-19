import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import SomeBlock from "./hideBlock";
import Main from "./main";
import ItemPage from "./ItemPage";

export default class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/item/:id" component={ItemPage} />
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
