import React from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	StyleSheet,
	Text,
	ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const image = {
	leaderboards : require('../assets/buttonAlt2Crown.png'),
	connect      : require('../assets/buttonAlt2fb.png')
};

const ZoomInOut = {
	0   : {
		opacity : 1,
		scale   : 1
	},
	0.5 : {
		opacity : 1,
		scale   : 0.9
	},
	1   : {
		opacity : 1,
		scale   : 1
	}
};

Animatable.initializeRegistryWithDefinitions({
	ZoomInOut : ZoomInOut
});

class ButtonTop extends React.Component {
	isRight = () => {
		return this.props.children.toLowerCase() === 'connect';
	};

	handleRefView = (ref) => (this.view = ref);

	bounce = () => this.view.animate('ZoomInOut', 200);

	render() {
		return (
			<View style={styles.button}>
				<TouchableWithoutFeedback style={styles.button} onPress={this.bounce}>
					<Animatable.View ref={this.handleRefView} style={styles.button} easing='linear'>
						<ImageBackground
							source={image[this.props.children.toLowerCase()]}
							style={styles.buttonImage(this.isRight())}
							resizeMode='contain'
						>
							<Text style={styles.textButton(this.isRight())}>
								{this.props.children}
							</Text>
						</ImageBackground>
					</Animatable.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

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

export default ButtonTop;
