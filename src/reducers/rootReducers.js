import {
	addComboReducer,
	resetComboReducer,
	changeStatusReducer,
	changePatternReducer,
	changeGifReducer,
	changeBatchPatternReducer
} from './comboReducer';

import {
	fetchDataUserReducer,
	resetDataUserReducer,
	upadteUserScoreReducer
} from './userReducer';

import {
	fetchLeaderboardListsBeginReducer,
	fetchLeaderboardListsSuccessReducer,
	fetchLeaderboardListsFailureReducer
} from './leaderboardReducer';

import { initState } from '../initState';

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
		case 'FETCH_LEADERBOARD_BEGIN':
			return fetchLeaderboardListsBeginReducer(state, action);
			break;
		case 'FETCH_LEADERBOARD_SUCCESS':
			return fetchLeaderboardListsSuccessReducer(state, action);
			break;
		case 'FETCH_LEADERBOARD_FAILURE':
			return fetchLeaderboardListsFailureReducer(state, action);
			break;
		case 'FETCH_DATA_USER':
			return fetchDataUserReducer(state, action);
			break;
		case 'RESET_DATA_USER':
			return resetDataUserReducer(state, action);
			break;
		case 'UPDATE_USER_SCORE':
			return upadteUserScoreReducer(state, action);
			break;
		case 'CHANGE_BATCH_PATTERN':
			return changeBatchPatternReducer(state, action);
			break;
	}
	return state;
};

export default rootReducers;
