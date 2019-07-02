import axios from "axios";

import * as types from "../actionTypes/actionTypes";


const URL = "https://amadeus-restaurant.firebaseio.com/about";

export const showMoreInfo = payload => ({
	type: types.SHOW_MORE_INFO,
	payload
});

const getRequest = payload => ({
	type: types.GET_REQUEST,
	payload
});

const getRequestSuccess = payload => ({
	type: types.GET_REQUEST_SUCCESS,
	payload
});

const getRequestFail = payload => ({
	type: types.GET_REQUEST_FAIL,
	payload
});

export const getPosts = () => dispatch => {
	dispatch(getRequest());
	return axios
		.get(URL + ".json")
		.then(res => dispatch(getRequestSuccess(res)))
		.catch(err => dispatch(getRequestFail(err)));
};
