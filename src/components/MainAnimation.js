import React from 'react';
import { View, Text } from 'native-base';
import { ImageBackground, Image, Dimensions } from 'react-native';

import { styles } from './mainAnimationStyle';

const frame = require('../assets/frame.png');
const gif = require('../assets/white2.gif');

const { width, height } = Dimensions.get('screen');

class MainAnimation extends React.Component {
	render() {
		return (
			<View>
				<ImageBackground style={styles.container(width * 1.2)} source={frame}>
					<Image source={gif} style={{ height: 200 }} resizeMode='contain' />
				</ImageBackground>
			</View>
		);
	}
}

export default MainAnimation;
