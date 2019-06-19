import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "./header";
import Title from "./title"
import About from "./section"

export default ({ header = true, children, footer }) => {
	return (
		<div className="container">
			<div className="case">
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


				
			<div className="main">{children}</div>

				{footer && <div>I am footer</div>}
			
			
		</div>
	);
};