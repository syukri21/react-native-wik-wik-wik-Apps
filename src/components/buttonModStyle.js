import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	Touchable : ({ x, y }) => ({
		width        : 80,
		height       : 80,
		borderRadius : 60,
		position     : 'absolute',
		bottom       : y,
		left         : x
	}),
	button    : {
		width        : 80,
		height       : 80,
		overflow     : 'hidden',
		borderRadius : 60,
		elevation    : 30
	},
	image     : {
		width     : 80,
		height    : 80,
		transform : [
			{ translateY: 0 },
			{ translateX: 0 }
		]
	}
});

export { styles };
