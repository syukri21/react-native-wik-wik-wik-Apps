import React from 'react';
import { View, Text, Button } from 'native-base';
import { ImageBackground, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './mainAnimationStyle';
import { changeStatusAction } from '../action/comboAction';

const frame = require('../assets/frame.png');
const gif = require('../assets/giphy_3.gif');
const kazuma = require('../assets/kazuma.gif');

const { width, height } = Dimensions.get('screen');

class MainAnimation extends React.Component {
	renderItem = () => {
		if (this.props.status > 0) {
			return (
				<Image
					source={this.props.status == 1 ? gif : kazuma}
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
	status : state.status
});

const mapDispacthToProps = (dispatch) => ({
	changeStatus : (status) => () => dispatch(changeStatusAction(status))
});

export default connect(mapStateToProps, mapDispacthToProps)(MainAnimation);
