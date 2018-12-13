import {
	addComboReducer,
	resetComboReducer,
	changeStatusReducer,
	changePatternReducer,
	changeGifReducer
} from './comboReducer';

const initState = {
	pattern      : [ 1, 1, 1 ],
	batchPattern : [ [ 1, 2, 3 ], [ 2, 2, 1 ], [ 3, 3, 1 ] ],
	combos       : 0,
	user         : {
		id          : 1,
		nama        : 'syukri',
		highCombo   : 12,
		latestCombo : 0
	},
	// status 0 : ready, 1: playing, 2: loose
	status       : 0,
	// status 0 : wikwik, 1 : uhuhuh, 2: ihihih, 3: ahahah, -1: default, 4: loose
	gifStatus    : -1,
	view         : null
};

const rootReducers = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_COMBO':
			return addComboReducer(state, action);
			break;
		case 'RESET_COMBO':
			return resetComboReducer(state, action);
			break;
		case 'CHANGE_STATUS':
			return changeStatusReducer(state, action);
			break;
		case 'CHANGE_PATTERN':
			return changePatternReducer(state, action);
			break;
		case 'CHANGE_GIF':
			return changeGifReducer(state, action);
			break;
	}
	return state;
};

export default rootReducers;
