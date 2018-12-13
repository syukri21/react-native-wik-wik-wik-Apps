export const fetchLeaderboardListsBegin = () => ({
	type : 'FETCH_LEADERBOARD_BEGIN'
});

export const fetchLeaderboardListsSuccess = (results) => ({
	type    : 'FETCH_LEADERBOARD_SUCCESS',
	results
});

export const fetchLeaderboardListsFailure = (error) => ({
	type  : 'FETCH_LEADERBOARD_FAILURE',
	error
});

export function fetchLeaderboard() {
	return (dispatch) => {
		dispatch(fetchLeaderboardListsBegin());
		return fetch('http://10.0.2.2:3333/api/v1/scores')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				dispatch(fetchLeaderboardListsSuccess(json.results));
				return json.results;
			})
			.catch((error) => {
				alert(error);
				return dispatch(fetchLeaderboardListsFailure(error));
			});
	};
}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
