import { requestGraphAPI } from './graphApiFacebook';

export const fetchDataUserAction = (user) => {
	return {
		type : 'FETCH_DATA_USER',
		user
	};
};

export const fetchUser = (user) => (dispatch) => {
	const fetch = (user) => dispatch(fetchDataUserAction(user));
	requestGraphAPI(fetch);
	return {
		type : 'wewewe'
	};
};
