import React from "react";

const HOCcomponent = WrapperComponent => {
	return class extends React.Component {
		state = {
			w: window.innerWidth,
			h: window.innerHeight
		};

		componentDidMount() {
			window.addEventListener("resize", this.resize);
		}

		componentWillUnmount() {
			window.removeEventListener("resize", this.resize);
		}

		resize = e => this.setState({ w: e.currentTarget.innerWidth, h: e.currentTarget.innerHeight });

		render() {
			const { w, h } = this.state;
			return <WrapperComponent w={w} h={h} {...this.props} />;
		}
	};
};

export default HOCcomponent;
