import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container    : {
		position : 'absolute',
		left     : 0,
		top      : 0,
		right    : 0,
		bottom   : 0
	},
	absolute     : (width, height) => ({
		position : 'absolute',
		width    : '100%',
		height   : '100%'
	}),
	realAbsolute : {
		position : 'absolute',
		left     : 0,
		bottom   : 0
	}
});

export { styles };
