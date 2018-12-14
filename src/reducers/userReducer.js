export const fetchDataUserReducer = (state, action) => {
	console.log(action);
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
