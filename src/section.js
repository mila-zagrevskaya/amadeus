import React from "react";
import { Link } from "react-router-dom";
import Button from "./button"


const sectionArr = [
    {
        title: "About Amadeus Restaurant",
        parag1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis lorem nec enim tempus viverra condimentum eget dui.  Quisque ac ornare orci lacinia facilisis velit eget interdum. ",
        parag2: "Quisque orci neque, euismod vitae turpis quis, accumsan iaculis velit. Nulla lacinia facilisis velit eget interdum.",
        btnText: "Read more",
        bigImg: "./images/glassOfWine.jpg",
    }
]

export default ({ text, ...rest }) => (
    <div className="section">
        { sectionArr.map (el => 
         <>
            <div className="text-about">
                <h2> {el.title}</h2>
                <p>{ el.parag1} </p>
                <p>{ el.parag2} </p>
                <Button className="title-button" text={el.btnText} onClick="#"/>
            </div>
            <img src = {el.bigImg} alt="photo"/>
         </>
         )}
    </div>
)