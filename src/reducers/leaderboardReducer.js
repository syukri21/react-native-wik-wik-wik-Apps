export const fetchLeaderboardListsBeginReducer = (state, action) => ({
	...state,
	scores : {
		...state.scores,
		loading : true,
		error   : null
	}
});

export const fetchLeaderboardListsSuccessReducer = (state, action) => ({
	...state,
	scores : {
		...state.scores,
		loading : false,
		items   : action.results
	}
});

export const fetchLeaderboardListsFailureReducer = (state, action) => ({
	...state,
	scores : {
		loading : false,
		error   : action.error,
		items   : []
	}
});
