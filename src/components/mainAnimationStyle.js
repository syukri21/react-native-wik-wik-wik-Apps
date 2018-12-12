import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container : (width) => ({
		width          : width,
		height         : width,
		justifyContent : 'center',
		alignItems     : 'center',
		transform      : [ { translateY: -80 } ]
	}),
	image     : (width) => {
		return {
			height    : width * 0.65,
			width     : width * 0.65,
			transform : [ { translateX: -4 }, { translateY: -20 } ]
		};
	}
});

export { styles };
