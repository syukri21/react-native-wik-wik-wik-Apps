import React from 'react';
import { View, Text, Button } from 'native-base';
import { ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './mainAnimationStyle';
import { changeStatusAction, changeGifAction, resetComboAction } from '../action/comboAction';

const frame = require('../assets/frame.png');
const wikwikwik = require('../assets/wikwikwik.gif');
const uihuihuih = require('../assets/uihuihuih.gif');
const ohohoh = require('../assets/ohohoh.gif');
const ihihih = require('../assets/ihihih.gif');
const lose = require('../assets/lose.gif');
const letsplay = require('../assets/letsplay.gif');
const { width, height } = Dimensions.get('screen');

class MainAnimation extends React.Component {
	gifRender(value) {
		switch (this.props.gifStatus) {
			case 1:
				return wikwikwik;
				break;
			case 2:
				return uihuihuih;
				break;
			case 3:
				return ohohoh;
				break;
			case 4:
				return ihihih;
				break;
			case 5:
				return lose;
				break;
			case 6:
				return letsplay;
				break;
		}
	}

	handlePress = () => {
		this.props.changeStatus(1);
		this.props.resetCombo();
		this.props.changeGif(6);
	};

	renderItem = () => (
		<Image
			source={this.gifRender(this.props.gifStatus)}
			style={styles.image(width)}
			resizeMode='stretch'
		/>
	);

	render() {
		return (
			<View>
				<ImageBackground style={styles.container(width * 1.2)} source={frame}>
					{this.renderItem()}
				</ImageBackground>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	status    : state.status,
	gifStatus : state.gifStatus
});

const mapDispacthToProps = (dispatch) => ({
	changeStatus : (status) => dispatch(changeStatusAction(status)),
	changeGif    : (gifStatus) => dispatch(changeGifAction(gifStatus)),
	resetCombo   : () => dispatch(resetComboAction())
});

export default connect(mapStateToProps, mapDispacthToProps)(MainAnimation);
