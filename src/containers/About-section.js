import React from "react";
// import { Link } from "react-router-dom";
import Description from "../components/description"



export default ({ text, title, parag1, span, parag2, btnText, bigImg, ...rest }) => (
    <div className="section">
        <Description text = {text}  title = {title} parag1 = {parag1}  span = {span} parag2= {parag2} btnText = {btnText}></Description>
        <img src = {bigImg} className = "big-img" alt="photo"/>
        {/* <div className = " pictures-box">
            <img src = {bigImg} className = "pict" alt="photo"/>
            <img src = {bigImg} className = "pict" alt="photo"/>
            <img src = {bigImg} className = "pict" alt="photo"/>
        </div> */}
        <div className = "more-information">
            {text}
        </div>   
    </div>
)