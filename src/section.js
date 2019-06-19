import React from "react";
// import { Link } from "react-router-dom";
import Button from "./button"




export default ({ text, title, parag1, span, parag2, btnText, bigImg, ...rest }) => (
    <div className="section">
        <div className="text-about">
            <h2> {title}</h2>
            <p>{ parag1} <span>{span}</span></p>
            <p>{ parag2} </p>
            <Button className="title-button more" text={btnText} onClick= "#"/>
        </div>
        <img src = {bigImg} className = "big-img" alt="photo"/>
    </div>
)