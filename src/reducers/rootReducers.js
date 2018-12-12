import { addComboReducer, resetComboReducer, changeStatusReducer } from './comboReducer';

const initState = {
	pattern      : [ 1, 1, 1, 1, 2, 3, 4, 1, 3, 2 ],
	batchPattern : [
		[ 1, 1, 1, 1, 2, 3, 4, 1, 3, 2 ],
		[ 2, 2, 1, 3, 4, 2, 3, 4, 1 ],
		[ 3, 3, 2, 1, 3, 4 ]
	],
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
	}
	return state;
};

export default rootReducers;
