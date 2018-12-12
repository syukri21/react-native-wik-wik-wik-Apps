const addComboReducer = (state, action) => {
	return {
		...state,
		combos : state.combos + action.combo
	};
};

const resetComboReducer = (state, action) => {
	return {
		...state,
		combos : 0
	};
};

const changeStatusReducer = (state, action) => {
	return {
		...state,
		status : action.status
	};
};
export { addComboReducer, resetComboReducer, changeStatusReducer };
