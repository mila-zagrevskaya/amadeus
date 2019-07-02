import React from "react";
import Scrollchor from 'react-scrollchor';
import logo from "../assets/img/logo.png";
import Navigation from "./navigation"



export default () => (
	<header className="header">
		<div className="logo-box">
				<Scrollchor to = "#main">
					<img src= {logo} className = "logo" alt="logo"/>
				</Scrollchor>
			</div>
			<Navigation></Navigation>
	</header>
);

