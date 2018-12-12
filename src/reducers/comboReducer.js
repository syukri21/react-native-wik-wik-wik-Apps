const addComboReducer = (state, action) => {
	return {
		...state,
		combos : state.combos + action.combo
	};
};

export { addComboReducer };
