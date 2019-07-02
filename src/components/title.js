import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
// import Menu from "../containers/menu-section"

export default (prop) => (
    <div className="title-box">
        <h1>Welcome to Amadeus</h1>
        <p className="welcom-title">
            We offer mouth watering <Link to = "#about" className = "cuisine">French cuisine</Link>
        </p>
        <div className="button-box">
            <Button className="title-button" text="See menu" onClick = {() => {}} />
            <Button className="title-button" text="Find a table" onClick= {() => {}} />
        </div>
        <div className="scroll-box">
            <p className="icon-angle-double-down">Scroll down for details </p>
        </div>
    </div>
)


