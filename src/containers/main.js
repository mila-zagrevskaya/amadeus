import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/header";
import Title from "../components/title";
import About from "./About-section";
import Menu from "./menu-section";
import Reserve from "./reserve"


export default ({ header = true, children, footer }) => {
	return (
		<div className="container">
			<div className="case" id = "main">
				{header && <Header />}	
				<div className = "wrapper">
					<Title></Title>
				</div>
			</div>	
			<div className = "section-wrap">
				<div className="wrapper">
					<About title = "About Amadeus Restaurant "
						parag1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis lorem nec enim tempus viverra condimentum eget dui.  Quisque ac ornare orci lacinia facilisis velit "
						span = "eget interdum ."
						parag2 = "Quisque orci neque, euismod vitae turpis quis, accumsan iaculis velit. Nulla lacinia facilisis velit eget interdum."
						btnText = "Read more"
						bigImg = "./images/glassOfWine.jpg"

					></About>
				</div>				
			</div>		
			<div className = "section-menu">
				<div className="wrapper">
					<Menu title = "Tasteful French Cuisine"
						parag1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis lorem nec enim tempus viverra condimentum eget dui.  Quisque ac ornare orci lacinia facilisis velit "
						span = "eget interdum ."
						parag2 = "Quisque orci neque, euismod vitae turpis quis, accumsan iaculis velit. Nulla lacinia facilisis velit eget interdum."
						btnText = "view menu"
						bigImg = "./images/beef-steak.jpg"
					></Menu>
				</div>				
			</div>
			<Reserve></Reserve>
			<div className="main">{children}</div>

				{footer && <div>I am footer</div>}
			
			
		</div>
	);
};