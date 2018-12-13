import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { _ } from 'lodash';
import Sound from 'react-native-sound';

import {
	addComboAction,
	changeStatusAction,
	changePatternAction,
	changeGifAction
} from '../action/comboAction';
import { connect } from 'react-redux';

import ButtonMod from './ButtonMod';
import { styles } from './buttonActionStyles';
import Loose from './Loose';
const { width, height } = Dimensions.get('screen');

class ButtonActions extends React.Component {
	state = {
		count : 0
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

	playTone = (file) => {
		let s = new Sound(file, Sound.MAIN_BUNDLE, (err) => {
			if (err) alert(err);
			s.play((success) => {
				if (!success) {
					alert('error');
				}
				s = null;
			});
		});
	};

	handleOnPressed = (value) => () => {
		const { count } = this.state;
		this.props.changeGif(value);

		// stop music if pattern is worng
		if (this.props.pattern[count] !== value) {
			return this.setState((prevState) => {
				this.props.changeStatus(2);
				this.props.changeGif(5);
				return {
					count : 0
				};
			});
		}

		switch (value) {
			case 1:
				this.playTone('none.mp3');
				break;
			case 2:
				this.playTone('none2.mp3');
				break;
			case 3:
				this.playTone('none3.mp3');
				break;
			case 4:
				this.playTone('none4.mp3');
				break;
		}

		if (this.props.pattern.length === count + 1) {
			// add combo if all pattern is right
			return this.setState((prevState) => {
				this.props.changePattern();
				this.props.addCombo(1);
				return {
					count : 0
				};
			});
		}

		// add one count if a pattern is right
		this.setState((prevState) => {
			return {
				count : prevState.count + 1
			};
		});
	};

	componentDidMount() {}

	render() {
		if (this.props.status === 2) return <Loose />;
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
	status       : state.status,
	view         : state.view
});

const mapDispatchToProps = (dispatch) => ({
	addCombo      : (combos) => dispatch(addComboAction(combos)),
	changeStatus  : (status) => dispatch(changeStatusAction(status)),
	changePattern : (status) => dispatch(changePatternAction(status)),
	changeGif     : (gifStatus) => dispatch(changeGifAction(gifStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonActions);
