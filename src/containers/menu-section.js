import React from "react";
// import { Link, Switch, Route } from "react-router-dom";
import Description from "../components/description"

const pictures = [
    {
        src: "./images/food.jpg",
        className: "top-pict",
        id: 1
    },
    {
        src: "./images/meat.jpg",
        className: "top-pict",
        id: 2
    },
    {
        src: "./images/cake.jpg",
        className: "btm-pict",
        id: 3
    },
]

export default ({ id, text, title, parag1, span, parag2, btnText, flag, ...rest }) => (
    <div className="section" id = {id}>
        <div className = "top-box menu-box"> 
            <div className = "menu-pictures-box">
                {pictures.map(el => (
                    <img src = {el.src} className = {el.className} alt="Amadeus" key = {el.id}/>
                ))}
             </div>
            <Description text = {text}  title = {title} parag1 = {parag1}  span = {span} parag2= {parag2} btnText = {btnText} flag = {true}></Description>
        </div>    
        
        <div className = "more-information">
            {text}
        </div>   
    </div>
)