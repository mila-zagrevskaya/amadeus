import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./containers/main";
import About from "./containers/About-section";
import Menu from "./containers/menu-section"
import Reserve from "./containers/reserve"
import Events from "./components/events"
import Contacts from "./containers/footer"
import Fullmenu from "./containers/full-menu"
// import ItemPage from "./components/ItemPage";
// import SomeBlock from "./components/hideBlock";

export default class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route path="/" component={Main} />
					<Route path="/About" component={About} /> 
					<Route path="/Menu" component={Menu} /> 
					<Route path="/Reserve" component={Reserve} /> 
					<Route path="/Reserve" component={Events} /> 
					<Route path="/Contacts" component={Contacts} /> 
					<Route exact path="/viewmenu" component={Fullmenu} />
					{/* <Route path="/item/:id" component={ItemPage} /> */}					
					{/* <Route
						exact
						path="/test"
						render={props => {
							return <div>TEST PAGe, Hello</div>;
						}}
					/> */}
				</Switch>
			</>
		);
	}
}
