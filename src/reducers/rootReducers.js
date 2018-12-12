import {
	addComboReducer,
	resetComboReducer,
	changeStatusReducer,
	changePatternReducer
} from './comboReducer';

const initState = {
	pattern      : [ 1, 1, 1 ],
	batchPattern : [ [ 1, 1, 1 ], [ 2, 2, 1 ], [ 3, 3, 1 ] ],
	combos       : 0,
	user         : {
		id          : 1,
		nama        : 'syukri',
		highCombo   : 12,
		latestCombo : 0
	},
	status       : 0
};

const rootReducers = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_COMBO':
			return addComboReducer(state, action);
			break;
		case 'RESET_COMBO':
			return resetComboReducer(state, action);
			break;
		case 'LOOSE_COMBO':
			return changeStatusReducer(state, action);
			break;
		case 'CHANGE_PATTERN':
			return changePatternReducer(state, action);
			break;
	}
	return state;
};

export default rootReducers;
