import React from "react";
import { Link } from "react-router-dom";


const liArr = [
	{ path: "/", id: 1, text: "Main" },
	{ path: "/menu",  id: 2,  text: "Menu"  },
	{ path: "/about", id: 3,  text: "About" },
	{ path: "/events", id: 4, text: "Events"  },
	{ path: "/reservations", id: 5, text: "Reservations" },
	{ path: "/contact", id: 6 , text: "Contact"}
];

export default () => (
    <nav className=" nav">
		<ul className=" list">
			{liArr.map(el => (
				<li className="item" key={el.id}>
					<Link to={el.path}>{el.text}</Link>
				</li>
			) ) }
		</ul>
	</nav>
);

