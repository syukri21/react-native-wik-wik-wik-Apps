import React from 'react';
import { View, Text, Button } from 'native-base';
import { ImageBackground, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './mainAnimationStyle';
import { changeStatusAction, changeGifAction } from '../action/comboAction';

const frame = require('../assets/frame.png');
const wikwikwik = require('../assets/wikwikwik.gif');
const uihuihuih = require('../assets/uihuihuih.gif');
const ohohoh = require('../assets/ohohoh.gif');
const ihihih = require('../assets/ihihih.gif');
const lose = require('../assets/lose.gif');
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
		}
	}

	renderItem = () => {
		if (this.props.gifStatus > 0) {
			return (
				<Image
					source={this.gifRender(this.props.gifStatus)}
					style={styles.image(width)}
					resizeMode='stretch'
				/>
			);
		} else {
			return (
				<Button style={{ alignSelf: 'center' }} onPress={this.props.changeStatus(1)}>
					<Text>START</Text>
				</Button>
			);
		}
	};

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
	changeStatus : (status) => () => dispatch(changeStatusAction(status)),
	changeGif    : (gifStatus) => () => dispatch(changeGifAction(gifStatus))
});

export default connect(mapStateToProps, mapDispacthToProps)(MainAnimation);
