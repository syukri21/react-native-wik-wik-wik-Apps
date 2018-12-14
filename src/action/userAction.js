import { requestGraphAPI } from './graphApiFacebook';

export const fetchDataUserAction = (user) => {
	return {
		type : 'FETCH_DATA_USER',
		user
	};
};

export const fetchUser = () => (dispatch) => {
	const fetch = (user) => dispatch(fetchDataUserAction(user));
	requestGraphAPI(fetch);
	return {
		type : 'NULL'
	};
};

export const resetUserDataAction = () => ({
	type : 'RESET_DATA_USER'
});

export const upadteUserScoreAction = (userid, score) => {
	fetch('http://10.0.2.2:3333/api/v1/user', {
		method  : 'PATCH',
		headers : {
			Accept         : 'application/json',
			'Content-Type' : 'application/json'
		},
		body    : JSON.stringify({ userid, score })
	})
		.then(handleErrors)
		.then((res) => res.json())
		.then((json) => {
			return json;
		})
		.catch((error) => {
			return false;
		});

	return {
		type   : 'UPDATE_USER_SCORE',
		score,
		userid
	};
};

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
