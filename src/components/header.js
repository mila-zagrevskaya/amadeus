import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const liArr = [
	{ path: "/", id: 1, text: "Main" },
	{ path: "/menu",  id: 2,  text: "Menu"  },
	{ path: "/About", id: 3,  text: "About" },
	{ path: "/Events", id: 4, text: "Events"  },
	{ path: "/Reservations", id: 5, text: "Reservations" },
	{ path: "/Contact", id: 6 , text: "Contact"}
];

export default () => (
	<header className="header">
		<div className="header__logo-box">
				<Link to = "/">
					<img src= {logo} className = ".header__logo" alt="logo"/>
				</Link>
			</div>
			<nav className="header__nav">
				<ul className="header__list">
					{liArr.map(el => (
						<li className="header__item" key={el.id}>
							<Link to={el.path}>{el.text}</Link>
						</li>
					))}
				</ul>
			</nav>
	</header>
);
