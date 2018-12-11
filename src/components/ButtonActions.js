import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { _ } from 'lodash';

import ButtonMod from './ButtonMod';
import Sound from 'react-native-sound';

const { width, height } = Dimensions.get('screen');

class ButtonActions extends React.Component {
	music = new Sound('bp.mp3', Sound.DOCUMENT, (err) => {
		if (err) {
			console.log(err);
			return;
		}
	});

	state = {
		count : 0
	};

	move = [
		4,
		4,
		4,
		4,
		1
	];

	getPosition = (number) => {
		let restWidth = width - 80 * 4;
		x = restWidth / 5;
		y = 30;
		return {
			x : (number + 1) * x + number * 80,
			y : y
		};
	};

	handleOnPressed = (value) => () => {
		const { count } = this.state;
		if (count === 0) {
			this.music.play();
		}
		if (this.move[count] !== value) {
			this.music.setVolume(0.2);
			this.setState({
				count : 0
			});
			return;
		} else {
			this.music.setVolume(1);
		}
		this.setState((prevState) => {
			return {
				count : prevState.count + 1
			};
		});
	};

	render() {
		return (
			<View style={{ position: 'absolute', left: 0, bottom: 0 }}>
				<ButtonMod
					color='orange'
					position={this.getPosition(0)}
					onPressed={this.handleOnPressed(1)}
				/>
				<ButtonMod
					color='blue'
					position={this.getPosition(1)}
					onPressed={this.handleOnPressed(2)}
				/>
				<ButtonMod
					color='violet'
					position={this.getPosition(2)}
					onPressed={this.handleOnPressed(3)}
				/>
				<ButtonMod
					color='green'
					position={this.getPosition(3)}
					onPressed={this.handleOnPressed(4)}
				/>
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
