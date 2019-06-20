import React, { Component } from "react";

export default class List extends Component {
	state = { show: false };

	trigger = () => this.setState(prevState => ({ show: !prevState.show }));

	render() {
		const { onChange, value, options } = this.props;
		return (
			<div>
				<div onClick={this.trigger}>{value}</div>
				{this.state.show && (
					<ul>
						{options.map(el => (
							<li key={el.id} onClick={onChange.bind(null, el.value)}>
								{el.text}
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}
