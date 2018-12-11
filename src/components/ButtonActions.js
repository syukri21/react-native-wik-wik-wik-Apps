import React from 'react';
import { View, Dimensions } from 'react-native';
import { _ } from 'lodash';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';

import ButtonMod from './ButtonMod';
import { styles } from './buttonActionStyles';

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

	move = this.props.pattern;

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
			<View style={styles.realAbsolute}>
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

const mapStateToProps = (state) => ({
	pattern : state.pattern
});

export default connect(mapStateToProps)(ButtonActions);
