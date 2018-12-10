import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container } from 'native-base';
import ButtonMod from '../components/ButtonMod';

const { width, height } = Dimensions.get('screen');

class HomeScreen extends React.Component {
	static navigationOptions = {
		title  : 'HOME',
		header : null
	};

	getPosition = (number) => {
		let restWidth = width - 80 * 4;
		x = restWidth / 5;
		y = 20;
		return {
			x : (number + 1) * x + number * 80,
			y : y
		};
	};

	render() {
		return (
			<Container style={styles.container}>
				<Image
					style={styles.absolute(width, height)}
					source={require('../asets/background.jpg')}
					resizeMode='stretch'
				/>
				<LinearGradient
					colors={[
						'#AE427388',
						'#AE427388',
						'#ffffffaa'
					]}
					style={styles.absolute(width, height)}
				/>
				<ButtonMod color='orange' position={this.getPosition(0)} />
				<ButtonMod color='blue' position={this.getPosition(1)} />
				<ButtonMod color='violet' position={this.getPosition(2)} />
				<ButtonMod color='green' position={this.getPosition(3)} />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		position : 'absolute',
		left     : 0,
		top      : 0,
		right    : 0,
		bottom   : 0
	},
	absolute  : (width, height) => ({
		position : 'absolute',
		width    : '100%',
		height   : '100%'
	})
});

export default HomeScreen;
