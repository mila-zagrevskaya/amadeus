import React from "react";

export default ({ id, label, type = "text", icon, ...rest }) => (
	<label htmlFor={id} className="input-box">
		{label}
		<input className= {icon}  id={id} type={type} {...rest} >
			{/* <span className = {icon}></span> */}
		</input>
	</label>
);
