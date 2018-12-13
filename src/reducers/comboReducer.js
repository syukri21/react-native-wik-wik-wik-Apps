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

const changePatternReducer = (state, action) => {
	let getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	};

	return {
		...state,
		pattern : state.batchPattern[getRandomInt(state.batchPattern.length)]
	};
};

const changeGifReducer = (state, action) => {
	return {
		...state,
		gifStatus : action.gifStatus
	};
};

export {
	addComboReducer,
	resetComboReducer,
	changeStatusReducer,
	changePatternReducer,
	changeGifReducer
};
