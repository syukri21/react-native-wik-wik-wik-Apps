import React from 'react';
import { Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, View, H1 } from 'native-base';
import { connect } from 'react-redux';

import { styles, LinearGradientConfig } from './HomeStyle';
import ButtonActions from '../components/ButtonActions';
import HeaderMod from '../components/HeaderMod';
import MainAnimation from '../components/MainAnimation';
import ComboBoard from '../components/ComboBoard';

import { upadteUserScoreAction } from '../action/userAction';

const { width, height } = Dimensions.get('screen');

class HomeScreen extends React.Component {
	static navigationOptions = {
		title  : 'HOME',
		header : null
	};

	pattern = this.props.pattern;

	render() {
		return (
			<Container style={styles.container}>
				<Image
					style={styles.absolute(width, height)}
					source={require('../assets/background.jpg')}
					resizeMode='stretch'
				/>
				<LinearGradient style={styles.absolute(width, height)} {...LinearGradientConfig} />
				<HeaderMod navigation={this.props.navigation} />
				<View style={styles.content}>
					<ComboBoard />
					<MainAnimation />
				</View>
				<ButtonActions />
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	pattern : state.pattern,
	combos  : state.combos,
	status  : state.status,
	user    : state.user
});

export default connect(mapStateToProps)(HomeScreen);
