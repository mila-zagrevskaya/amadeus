import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Title from "./title"


export default ({ header = true, children, footer }) => {
	return (
		<div className="container">
			<div className = "wrapper">
				{header && <Header />}
				<Title></Title>
				<div className="main">{children}</div>

				{footer && <div>I am footer</div>}
			</div>
			
		</div>
	);
};