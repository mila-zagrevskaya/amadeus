import * as types from "../actionTypes/actionTypes";

const formFields = [
	{
		id: 1,
		type: "text",
		value: "",
		name: "firstName",
		label: "First Name"
	},
	{
		id: 2,
		type: "text",
		value: "",
		name: "lastName",
		label: " Last Name"
	},
	{
		id: 3,
		value: "",
		type: "number",
		name: "age",
		label: "Age"
	},
	{
		id: 4,
		checked: true,
		type: "checkbox",
		name: "editable",
		label: "Can edit this profile ?"
	}
];

const initialState = {
	myForm: formFields,
	editFormField: formFields,
	sendDataObject: {
		editable: true,
		lastName: "",
		firstName: "",
		age: 0
	},
	postList: [],
	isFetching: false,
	editForm: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.CHANGE_INPUT_VALUE: {
			const { value, checked, type, id, name } = payload.target;
			const checkbox = type === "checkbox";

			return {
				...state,
				sendDataObject: {
					...state.sendDataObject,
					[name]: checkbox ? checked : value
				},
				myForm: state.myForm.map(el =>
					el.id === +id
						? {
								...el,
								[checkbox ? "checked" : "value"]: checkbox ? checked : value
						  }
						: el
				)
			};
		}

		case types.GET_REQUEST: {
			return state;
		}
		case types.GET_REQUEST_SUCCESS: {
			const { data } = payload;
			const postList = Object.keys(data).reduce((prev, elem) => {
				return prev.concat({
					...data[elem],
					id: elem
				});
			}, []);
			return { ...state, postList };
		}
		case types.GET_REQUEST_FAIL: {
			return state;
		}

		case types.POST_REQUEST: {
			return { ...state, isFetching: true };
		}

		case types.POST_REQUEST_SUCCESS: {
			return {
				...state,
				postList: state.postList.concat({
					...state.sendDataObject,
					id: payload.data.name
				}),
				isFetching: false
			};
		}

		case types.POST_REQUEST_FAIL: {
			return { ...state, isFetching: false };
		}

		case types.RESET_POSTS_FORM: {
			return { ...state, myForm: initialState.myForm };
		}

		case types.REMOVE_REQUEST: {
			return state;
		}
		case types.REMOVE_REQUEST_SUCCESS: {
			const { id } = payload;
			return {
				...state,
				postList: state.postList.filter(el => el.id !== id)
			};
		}

		case types.REMOVE_REQUEST_FAIL: {
			return state;
		}

		case types.SHOW_EDIT_FORM: {
			const currentPost = state.postList.find(el => el.id === payload);

			const editFormField = state.editFormField.map(el => ({
				...el,
				[el.type === "checkbox" ? "checked" : "value"]: currentPost[el.name]
			}));

			return { ...state, editForm: true, editFormField, sendDataObject: currentPost };
		}

		case types.CANCEL_UPDATE: {
			return {
				...state,
				editForm: false,
				editFormField: formFields,
				sendDataObject: initialState.sendDataObject
			};
		}

		default:
			return state;
	}
};
