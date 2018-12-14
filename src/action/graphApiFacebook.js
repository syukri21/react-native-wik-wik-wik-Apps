import { GraphRequestManager, GraphRequest } from 'react-native-fbsdk';

const _responseInfoCallback = (fetch) => (error: ?Object, result: ?Object) =>
	error || fetch(result);

export function requestGraphAPI(fetch) {
	const infoRequest = new GraphRequest(
		'/me?fields=id,name,email',
		null,
		_responseInfoCallback(fetch)
	);
	new GraphRequestManager().addRequest(infoRequest).start();
}
