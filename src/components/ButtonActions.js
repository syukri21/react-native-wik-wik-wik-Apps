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
		count     : 0,
		isPlaying : false
	};

	pattern = this.props.pattern;

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
		const { count, isPlaying } = this.state;

		if (!isPlaying && count === 0) {
			this.music.play();
			this.setState({
				count     : 0,
				isPlaying : true
			});
		}

		if (this.pattern[count] !== value) {
			this.music.stop();
			this.setState({
				count     : 0,
				isPlaying : false
			});
			return;
		}

		this.setState((prevState) => {
			return {
				count     : prevState.count + 1,
				isPlaying : true
			};
		});
	};

	componentDidMount() {}

	render() {
		return (
			<View style={styles.realAbsolute}>
				<ButtonMod
					color='orange'
					isActive={this.pattern[this.state.count] === 1}
					position={this.getPosition(0)}
					onPressed={this.handleOnPressed(1)}
				/>
				<ButtonMod
					color='blue'
					isActive={this.pattern[this.state.count] === 2}
					position={this.getPosition(1)}
					onPressed={this.handleOnPressed(2)}
				/>
				<ButtonMod
					color='violet'
					position={this.getPosition(2)}
					isActive={this.pattern[this.state.count] === 3}
					onPressed={this.handleOnPressed(3)}
				/>
				<ButtonMod
					color='green'
					position={this.getPosition(3)}
					isActive={this.pattern[this.state.count] === 4}
					onPressed={this.handleOnPressed(4)}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	pattern      : state.pattern,
	colorPattern : state.colorPattern
});

export default connect(mapStateToProps)(ButtonActions);
