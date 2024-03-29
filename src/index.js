import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/header"
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { store } from "./store";

import "./style/normalize.css"
import "./style/style.css"
import "./style/all.scss";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
