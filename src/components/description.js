import React from "react";

import Button from "../components/button"






export default ({ text, title, parag1, span, parag2, btnText, ...rest }) => (
    <div className="text-about">
        <h2> {title}</h2>
        <p>{ parag1} <span>{span}</span></p>
        <p>{ parag2} </p>
        <Button className="title-button more" text={btnText} onClick= {() => {}}/>
    </div>
   
)