import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.absolute(width, height)}
					source={require('../asets/background.jpg')}
					resizeMode='stretch'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		position        : 'absolute',
		left            : 0,
		top             : 0,
		right           : 0,
		bottom          : 0,
		backgroundColor : 'red'
	},
	absolute  : (width, height) => ({
		position : 'absolute',
		width,
		height
	})
});

export default HomeScreen;
