import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container : {
		position : 'absolute',
		left     : 0,
		top      : 0,
		right    : 0,
		bottom   : 0
	},
	absolute  : () => ({
		position : 'absolute',
		width    : '100%',
		height   : '100%'
	})
});

const LinearGradientConfig = {
	colors : [
		'#292929aa',
		'#29292944',
		'#F71490'
	],
	start  : { x: 0, y: 1 },
	end    : { x: 0, y: 0 }
};

export { styles, LinearGradientConfig };
