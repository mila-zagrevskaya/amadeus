import axios from "axios";

import * as types from "../actionTypes/actionTypes";

const URL = "https://test-request-4b9d7.firebaseio.com/posts";

export const changeInputValue = payload => ({
	type: types.CHANGE_INPUT_VALUE,
	payload
});

export const resetPostForm = () => ({
	type: types.RESET_POSTS_FORM
});

export const showEditForm = payload => ({
	type: types.SHOW_EDIT_FORM,
	payload
});

export const cancelUpdate = payload => ({
	type: types.CANCEL_UPDATE,
	payload
});

const postRequest = payload => ({
	type: types.POST_REQUEST,
	payload
});

const postRequestSuccess = payload => ({
	type: types.POST_REQUEST_SUCCESS,
	payload
});

const postRequestFail = payload => ({
	type: types.POST_REQUEST_FAIL,
	payload
});

export const createPost = payload => {
	return dispatch => {
		dispatch(postRequest());

		return axios
			.post(URL + ".json", payload)
			.then(res => dispatch(postRequestSuccess(res)))
			.catch(err => dispatch(postRequestFail(err)));
	};
};

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

const removeRequest = payload => ({
	type: types.REMOVE_REQUEST,
	payload
});

const removeRequestSuccess = payload => ({
	type: types.REMOVE_REQUEST_SUCCESS,
	payload
});

const removeRequestFail = payload => ({
	type: types.REMOVE_REQUEST_FAIL,
	payload
});

export const removePost = id => dispatch => {
	dispatch(removeRequest());
	return axios
		.delete(URL + "/" + id + ".json")
		.then(res => dispatch(removeRequestSuccess({ res, id })))
		.catch(err => dispatch(removeRequestFail(err)));
};
