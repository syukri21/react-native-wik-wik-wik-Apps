import { addComboReducer } from './comboReducer';

const initState = {
	pattern      : [ 1, 1, 1, 1, 2, 3, 4, 1, 3, 2 ],
	batchPattern : [
		[ 1, 1, 1, 1, 2, 3, 4, 1, 3, 2 ],
		[ 2, 2, 1, 3, 4, 2, 3, 4, 1 ],
		[ 3, 3, 2, 1, 3, 4 ]
	],
	combos       : 0
};

const rootReducers = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_COMBO':
			return addComboReducer(state, action);
			break;
	}
	return state;
};

export default rootReducers;
