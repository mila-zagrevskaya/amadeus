import React from "react";
// import { Link } from "react-router-dom";
import Description from "../components/description"


const pictures = [
    {   src: "./images/Eric-McGregor-flickr.jpg",
        className: "big-pict",
        id: 1
    },
    {   src: "./images/restorauntKitchen.jpg",
        className: "pict",
        id: 2
    },
    {   src: "./images/beef-steak.jpg",
        className: "pict",
        id: 3
    }
]

export default ({ id, text, title, parag1, span, parag2, btnText, bigimg, ...rest }) => (

    <div className="section" id = {id}>
        <div className = "top-box"> 
            <Description text = {text}  title = {title} parag1 = {parag1}  span = {span} parag2= {parag2} btnText = {btnText}></Description>
            <img src = {bigimg} className = "big-img" alt="Amadeus"/>
        </div>    
        <div className = "pictures-box">
            {pictures.map(el => (
                 <img src = {el.src} className = {el.className} alt="Amadeus" key = {el.id}/>
            ))}
            
        </div>
        <div className = "more-information">
            {text}
        </div>   
    </div>
)