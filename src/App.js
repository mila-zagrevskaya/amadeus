import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./containers/main";
// import About from "./containers/About-section";
import Menu from "./containers/menu-section"
// import Reserve from "./containers/reserve"
// import Events from "./components/events"
// import Contacts from "./containers/footer"


export default class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Main} />
					{/* <Route path="/about" component={About} />  */}
					<Route path="/menu" component={Menu} /> 
					{/* <Route path="/reserve" component={Reserve} />  */}
					{/* <Route path="/reserve" component={Events} />  */}
					{/* <Route path="/contacts" component={Contacts} />  */}
					<Route exact path="/viewmenu" component={Menu}/>
				</Switch>
			</>
		);
	}
}
