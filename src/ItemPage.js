import React, { Component } from "react";
import { TimelineMax, Power4, Linear, Back } from "gsap";

import { Link, Switch, Route } from "react-router-dom";

export default class ItemPage extends Component {
	state = { item: {}, currentLocation: "" };
	title = React.createRef();

	componentDidMount() {
		const { match, location } = this.props;
		this.setState({ currentLocation: location.pathname });
		fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`)
			.then(response => response.json())
			.then(json => this.setState({ item: json }));

		// let params = new URLSearchParams(location.search);

		// console.log("params", params.get("title"));

		// console.log("this.", this.props);

		// const titile = this.title.current;
		// console.log("repeat", titile);
		// const mainTL = new TimelineMax().set(titile, { autoAlpha: 1 }).repeat(0);
		// console.log("mainTL", mainTL);
	}

	render() {
		const { item, currentLocation } = this.state;
		return (
			<div>
				<h1 ref={this.title}>{item.title}</h1>

				<div>
					<Link to={`${currentLocation}/link1`}>Link 1</Link>
					<Link to={`${currentLocation}/link2`}>Link 2</Link>
				</div>

				<Switch>
					<Route path={`${currentLocation}/link1`} render={() => <div>CONTENT 1</div>} />
					<Route path={`${currentLocation}/link2`} render={() => <div>CONTENT 2</div>} />
				</Switch>
			</div>
		);
	}
}
