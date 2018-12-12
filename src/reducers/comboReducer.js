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

export { addComboReducer, resetComboReducer };
