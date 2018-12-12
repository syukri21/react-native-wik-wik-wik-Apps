import React from 'react';
import { View, Text } from 'native-base';
import { ImageBackground, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './mainAnimationStyle';

const frame = require('../assets/frame.png');
const gif = require('../assets/giphy_3.gif');
const kazuma = require('../assets/kazuma.gif');

const { width, height } = Dimensions.get('screen');

class MainAnimation extends React.Component {
	render() {
		return (
			<View>
				<ImageBackground style={styles.container(width * 1.2)} source={frame}>
					<Image
						source={this.props.status == 0 ? gif : kazuma}
						style={{
							height    : width * 0.65,
							width     : width * 0.65,
							transform : [ { translateX: -4 }, { translateY: -20 } ]
						}}
						resizeMode='stretch'
					/>
				</ImageBackground>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	status : state.status
});

export default connect(mapStateToProps)(MainAnimation);
