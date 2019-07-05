import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';


export default (prop) => (
    <div className="title-box">
        <h1>Welcome to Amadeus</h1>
        <p className="welcom-title">
            We offer mouth watering <Link to = "#about" className = "cuisine">French cuisine</Link>
        </p>
        <div className="button-box">
            <Scrollchor   to = "#menu" className="title-button btn"> See menu</Scrollchor>
            <Scrollchor   to = "#reservations" className="title-button btn"> Find a table</Scrollchor>
        </div>
        <div className="scroll-box">
            <p className="icon-angle-double-down">Scroll down for details </p>
        </div>
    </div>
)






           