import React from 'react';
import { View, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './buttonModStyle';

const color = {
	blue   : require('../assets/buttonblue.png'),
	green  : require('../assets/buttongreen.png'),
	violet : require('../assets/buttonviolet.png'),
	orange : require('../assets/buttonorange.png')
};

export default class ButtonMod extends React.Component {
	handleViewRef = (ref) => (this.view = ref);

	bounce = () => this.view.bounce(1000).then(this.props.onPressed);

	render() {
		return (
			<View style={styles.Touchable(this.props.position)}>
				<TouchableWithoutFeedback
					accessibilityIgnoresInvertColors={false}
					style={styles.Touchable(this.props.position)}
					onPress={this.bounce}
				>
					<Animatable.View style={styles.button} ref={this.handleViewRef}>
						<Image
							source={color[this.props.color]}
							resizeMode='contain'
							style={styles.image}
						/>
					</Animatable.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}
