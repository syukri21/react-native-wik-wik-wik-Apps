import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	button      : {
		flex           : 1,
		height         : 120,
		justifyContent : 'flex-end',
		alignItems     : 'center'
	},
	buttonImage : (isRight) => ({
		width          : 170,
		height         : 120,
		justifyContent : 'center',
		alignItems     : 'center',
		transform      : [
			{
				rotateY : isRight ? '180deg' : '0deg'
			},
			{ translateY: 20 }
		]
	}),
	textButton  : (isRight) => ({
		fontSize   : 15,
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
