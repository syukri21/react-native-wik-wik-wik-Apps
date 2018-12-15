import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { _ } from 'lodash';
import Sound from 'react-native-sound';
import TimerCountdown from 'react-native-timer-countdown';

import {
	addComboAction,
	changeStatusAction,
	changePatternAction,
	changeGifAction
} from '../action/comboAction';

import { upadteUserScoreAction } from '../action/userAction';

import { connect } from 'react-redux';

import ButtonMod from './ButtonMod';
import { styles } from './buttonActionStyles';
import Loose from './Loose';
const { width, height } = Dimensions.get('screen');

class ButtonActions extends React.Component {
	state = {
		count: 0,
		timer: 2000
	};

	getPosition = (number) => {
		let restWidth = width - 80 * 4;
		x = restWidth / 5;
		y = 30;
		return {
			x: (number + 1) * x + number * 80,
			y: y
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
		if (parseInt(this.props.pattern[count]) !== value) {
			this.lose();
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
					count: 0
				};
			});
		}

		// add one count if a pattern is right
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
				timer: 1500
			};
		});
	};

	lose = () => {
		return this.setState((prevState) => {
			this.props.changeStatus(2);
			this.props.changeGif(5);
			if (this.props.combo > this.props.user.highCombo) {
				this.props.updateScore(this.props.user.id, this.props.combo);
			}

			return {
				count: 0
			};
		});
	};

	render() {
		if (this.props.status === 2) return <Loose />;
		if (this.props.status === 0) return <Loose play />;
		return (
			<View style={styles.realAbsolute}>
				<TimerCountdown
					initialSecondsRemaining={this.state.timer}
					onTimeElapsed={this.lose}
					allowFontScaling={true}
					style={{
						fontSize: 40,
						color: 'white',
						position: 'absolute',
						width: 200,
						height: 90,
						bottom: height * 0.15,
						left: width / 2 - 100,
						justifyContent: 'center',
						textAlign: 'center'
					}}
				/>

				<ButtonMod
					color='orange'
					isActive={parseInt(this.props.pattern[this.state.count]) === 1}
					position={this.getPosition(0)}
					onPressed={this.handleOnPressed(1)}
				/>
				<ButtonMod
					color='blue'
					isActive={parseInt(this.props.pattern[this.state.count]) === 2}
					position={this.getPosition(1)}
					onPressed={this.handleOnPressed(2)}
				/>
				<ButtonMod
					color='violet'
					position={this.getPosition(2)}
					isActive={parseInt(this.props.pattern[this.state.count]) === 3}
					onPressed={this.handleOnPressed(3)}
				/>
				<ButtonMod
					color='green'
					position={this.getPosition(3)}
					isActive={parseInt(this.props.pattern[this.state.count]) === 4}
					onPressed={this.handleOnPressed(4)}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	batchPattern: state.batchPattern,
	pattern: state.pattern,
	status: state.status,
	view: state.view,
	combo: state.combos,
	user: state.user
});

const mapDispatchToProps = (dispatch) => ({
	addCombo: (combos) => dispatch(addComboAction(combos)),
	changeStatus: (status) => dispatch(changeStatusAction(status)),
	changePattern: (status) => dispatch(changePatternAction(status)),
	changeGif: (gifStatus) => dispatch(changeGifAction(gifStatus)),
	updateScore: (userid, score) => dispatch(upadteUserScoreAction(userid, score))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonActions);
