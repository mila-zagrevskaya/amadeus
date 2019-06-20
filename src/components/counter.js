import React, { Component } from "react";

export default class Counter extends Component {
	// state = { count: 0 };
	componentDidMount() {
		console.log("componentDidMount child");
		// this.setState({ count: this.props.counter });
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.counter !== prevProps.counter) this.setState({ count: this.props.counter });
	// }

	// shouldComponentUpdate(nextProps) {
	// 	if (nextProps.random === 10) {
	// 		console.log("BOOOM");

	// 		return false;
	// 	}

	// 	return true;
	// }

	render() {
		const { dec, inc, counter } = this.props;
		return (
			<div>
				<button onClick={inc}>in-crease</button>
				<button onClick={dec}>de-crease</button>
				<span>{counter}</span>
			</div>
		);
	}
}
