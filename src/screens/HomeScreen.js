import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container } from 'native-base';

import ButtonActions from '../components/ButtonActions';
import HeaderMod from '../components/HeaderMod';
const { width, height } = Dimensions.get('screen');

class HomeScreen extends React.Component {
	static navigationOptions = {
		title  : 'HOME',
		header : null
	};

	render() {
		return (
			<Container style={styles.container}>
				<Image
					style={styles.absolute(width, height)}
					source={require('../asets/background.jpg')}
					resizeMode='stretch'
				/>
				<LinearGradient
					colors={[
						'#292929aa',
						'#29292944',
						'#F71490'
					]}
					style={styles.absolute(width, height)}
					start={{ x: 0, y: 1 }}
					end={{ x: 0, y: 0 }}
				/>
				<HeaderMod />
				<ButtonActions />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		position : 'absolute',
		left     : 0,
		top      : 0,
		right    : 0,
		bottom   : 0
	},
	absolute  : (width, height) => ({
		position : 'absolute',
		width    : '100%',
		height   : '100%'
	})
});

export default HomeScreen;
