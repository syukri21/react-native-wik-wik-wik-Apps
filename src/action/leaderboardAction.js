export const fetchLeaderboardListsBegin = () => ({
	type : 'FETCH_LEADERBOARD_BEGIN'
});

export const fetchLeaderboardListsSuccess = (products) => ({
	type    : 'FETCH_LEADERBOARD_SUCCESS',
	payload : { products }
});

export const fetchLeaderboardListsFailure = (error) => ({
	type    : 'FETCH_LEADERBOARD_FAILURE',
	payload : { error }
});
