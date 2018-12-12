const addComboReducer = (state, action) => {
	alert(JSON.stringify(state));
	return {
		...state,
		combos : state.combos + action.combo
	};
};

export { addComboReducer };
