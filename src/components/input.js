import React from "react";

export default ({ id, label, type = "text", ...rest }) => (
	<label htmlFor={id} className="input-box">
		{label}
		<input className="input-box__input" id={id} type={type} {...rest} />
	</label>
);
