import { initState } from '../initState.js';

export const fetchDataUserReducer = (state, action) => {
	return {
		...state,
		user : {
			...state.user,
			id          : action.user[0].userid,
			nama        : action.user[0].username,
			highCombo   : action.user[0].score,
			latestCombo : null
		}
	};
};

export const resetDataUserReducer = (state, action) => ({
	...state,
	user : initState.user
});

export const upadteUserScoreReducer = (state, action) => ({
	...state,
	user : {
		...state.user,
		score : action.score
	}
});
