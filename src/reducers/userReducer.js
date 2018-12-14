export const fetchDataUserReducer = (state, action) => {
	return {
		...state,
		user : {
			...state.user,
			id          : action.user.id,
			nama        : action.user.name,
			highCombo   : null,
			latestCombo : null
		}
	};
};
