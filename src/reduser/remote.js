import * as types from "../actionTypes/actionTypes";

const initialState = {
	overflow:  "hidden",
	postList: [ ],
	text : ""
};

export default ( state = initialState,  action ) => {
	switch (action.type ) {
		case types.GET_REQUEST: {
			return state;
		}
		case types.GET_REQUEST_SUCCESS: {
			return {...state, postList: action.payload.data}
		}
		case types.GET_REQUEST_FAIL: {
			return state;
		}
		case types.SHOW_MORE_INFO: {
			return { ...state, overflow: "visible" };
		}
		default:
			return state;
	}
};
