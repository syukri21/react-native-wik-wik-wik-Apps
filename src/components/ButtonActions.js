import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { _ } from 'lodash';
import Sound from 'react-native-sound';

import {
	addComboAction,
	resetComboAction,
	changeStatusAction,
	changePatternAction
} from '../action/comboAction';
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

	getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	};

	state = {
		count     : 0,
		isPlaying : false
	};

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

		if (this.props.status === 0 || this.props.status === 2) return;

		// add combo if all pattern is right
		if (this.props.pattern.length === count + 1) {
			return this.setState((prevState) => {
				this.props.changePattern();
				this.props.addCombo(1);
				return {
					...this.state,
					count : 0
				};
			});
		}

		// stop music if pattern is worng
		if (this.props.pattern[count] !== value) {
			return this.setState((prevState) => {
				this.music.stop();
				this.props.changeStatus(2);
				this.props.resetCombo();
				return {
					...this.state,
					count : 0
				};
			});
		}

		// add one count if a pattern is right
		this.setState((prevState) => {
			return {
				...this.state,
				count : prevState.count + 1
			};
		});
	};

	componentWillReceiveProps(nextProprs) {
		// start music if count === 0 and !isPlaying
		if (this.props.status === 0 && nextProprs.status === 1) {
			this.music.setCurrentTime(3).play();
			this.setState({
				...this.state,
				count : 0
			});
		}
	}

	render() {
		return (
			<View style={styles.realAbsolute}>
				<ButtonMod
					color='orange'
					isActive={this.props.pattern[this.state.count] === 1}
					position={this.getPosition(0)}
					onPressed={this.handleOnPressed(1)}
				/>
				<ButtonMod
					color='blue'
					isActive={this.props.pattern[this.state.count] === 2}
					position={this.getPosition(1)}
					onPressed={this.handleOnPressed(2)}
				/>
				<ButtonMod
					color='violet'
					position={this.getPosition(2)}
					isActive={this.props.pattern[this.state.count] === 3}
					onPressed={this.handleOnPressed(3)}
				/>
				<ButtonMod
					color='green'
					position={this.getPosition(3)}
					isActive={this.props.pattern[this.state.count] === 4}
					onPressed={this.handleOnPressed(4)}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	batchPattern : state.batchPattern,
	pattern      : state.pattern,
	status       : state.status
});

const mapDispatchToProps = (dispatch) => ({
	addCombo      : (combos) => dispatch(addComboAction(combos)),
	resetCombo    : () => dispatch(resetComboAction()),
	changeStatus  : (status) => dispatch(changeStatusAction(status)),
	changePattern : (status) => dispatch(changePatternAction(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonActions);
