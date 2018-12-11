import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import ButtonMod from './ButtonMod';

const { width, height } = Dimensions.get('screen');

class ButtonActions extends React.Component {
	getPosition = (number) => {
		let restWidth = width - 80 * 4;
		x = restWidth / 5;
		y = 30;
		return {
			x : (number + 1) * x + number * 80,
			y : y
		};
	};

	render() {
		return (
			<View style={{ position: 'absolute', left: 0, bottom: 0 }}>
				<ButtonMod color='orange' position={this.getPosition(0)} />
				<ButtonMod color='blue' position={this.getPosition(1)} />
				<ButtonMod color='violet' position={this.getPosition(2)} />
				<ButtonMod color='green' position={this.getPosition(3)} />
			</View>
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

export default ButtonActions;
