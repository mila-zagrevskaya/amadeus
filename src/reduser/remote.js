import * as types from "../actionTypes/actionTypes";

const initialState = {
	overflow:  "hidden",
	postList: [],
	text : ""
};

export default ( state = initialState, { type, payload } ) => {
	switch ( type ) {
		case types.GET_REQUEST: {
			return state;
		}
		case types.GET_REQUEST_SUCCESS: {
			const { data } = payload;
			const postList = Object.keys ( data ).reduce ( ( prev, elem ) => {
				return prev.concat ( {
					...data[elem],
					id: elem
				} );
			}, [ ] );
			return { ...state, postList };
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
