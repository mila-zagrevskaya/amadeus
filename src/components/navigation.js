import React from "react";
import Scrollchor from 'react-scrollchor';



const liArr = [
	{ path: "#main", id: 1, text: "Main" },
	{ path: "#menu",  id: 2,  text: "Menu"  },
	{ path: "#about", id: 3,  text: "About" },
	{ path: "#events", id: 4, text: "Events"  },
	{ path: "#reservations", id: 5, text: "Reservations" },
	{ path: "#contact", id: 6 , text: "Contact"}
];

export default ( props ) => (
    <nav className=" nav">
		<ul className=" list">
			{liArr.map(el => (
				<li className="item" key={el.id}> 
					<Scrollchor to={el.path}>{el.text}</Scrollchor>  
				</li>
			) ) }
		</ul>
	</nav>
);

