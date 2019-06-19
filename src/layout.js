import React from "react";

import Header from "./header";

export default ({ header = true, children, footer }) => {
	return (
		<div className="conteiner">
			{header && <Header />}

			<div className="main">{children}</div>

			{footer && <div>I am footer</div>}
		</div>
	);
};
