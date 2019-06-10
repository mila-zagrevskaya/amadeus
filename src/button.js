import React from "react";

const buttonArr = [
    {text: "See menu"},
    {text: "Find a table"},
]
export default ({ text, ...rest }) => 
<button {...rest} className = "title-button">{text}</button>;
