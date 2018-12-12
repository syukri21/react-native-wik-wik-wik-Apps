import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	button      : {
		flex           : 1,
		height         : 100,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	buttonImage : (isRight) => ({
		width          : 190,
		height         : 80,
		justifyContent : 'center',
		alignItems     : 'center',
		transform      : [
			{
				rotateY : isRight ? '180deg' : '0deg'
			}
		]
	}),
	textButton  : (isRight) => ({
		fontSize   : 16,
		fontWeight : 'bold',
		color      : '#dedede',
		transform  : [
			{ translateX: 30 },
			{ translateY: 0 },
			{ rotateY: isRight ? '-180deg' : '0deg' }
		]
	})
});

export { styles };
