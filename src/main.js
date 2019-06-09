import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Wrapper from "./wrapper";
import Header from "./header";


export default ({ header = true, children, footer }) => {
	return (
		<div className="container">
			<div className = "wrapper">
				{header && <Header />}

				<div className="main">{children}</div>

				{footer && <div>I am footer</div>}
			</div>
			
		</div>
	);
};