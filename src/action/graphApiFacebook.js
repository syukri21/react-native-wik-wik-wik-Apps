import { GraphRequestManager, GraphRequest } from 'react-native-fbsdk';

const _responseInfoCallback = (fetch) => async (error: ?Object, result: ?Object) => {
	const test = await fetchUserBackend({
		userid   : result.id,
		username : result.name
	});
	if (error) {
		return error;
	} else {
		return fetch(test);
	}
};

export function requestGraphAPI(fetch) {
	const infoRequest = new GraphRequest('/me?fields=id,name', null, _responseInfoCallback(fetch));
	new GraphRequestManager().addRequest(infoRequest).start();
}

const fetchUserBackend = async (user) => {
	const jsonResponse = await fetch('http://10.0.2.2:3333/api/v1/user', {
		method  : 'POST',
		headers : {
			Accept         : 'application/json',
			'Content-Type' : 'application/json'
		},
		body    : JSON.stringify({ ...user })
	})
		.then(handleErrors)
		.then((res) => res.json())
		.then((json) => {
			return json;
		})
		.catch((error) => {
			return false;
		});

	return jsonResponse;
};

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
