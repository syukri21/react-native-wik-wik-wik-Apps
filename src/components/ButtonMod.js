import React from 'react';
import { View, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

import { styles } from './buttonModStyle';
import LightUp from './LightUp';

const color = {
	blue: require('../assets/buttonblue.png'),
	green: require('../assets/buttongreen.png'),
	violet: require('../assets/buttonviolet.png'),
	orange: require('../assets/buttonorange.png')
};
const colorPattern = {
	orange: '#F9D35E',
	blue: '#BEDCF1',
	violet: '#CC6B90',
	green: '#D1D300',
	transparent: '#dedede'
};

class ButtonMod extends React.Component {
	state = {
		isLightUp: false
	};

	handleViewRef = (ref) => (this.view = ref);

	bounce = () => {
		this.view.zoomOut(100).then(this.view.zoomIn(100)).then(this.props.onPressed());
	};

	componentWillReceiveProps({ status }) {
		if (status === 1) {
			this.setState({
				isLightUp: true
			});
		}
	}

	render() {
		return (
			<View style={styles.Touchable(this.props.position)}>
				{this.props.status === 1 && (
					<LightUp
						color={this.props.isActive && colorPattern[this.props.color]}
					/>
				)}
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

const mapStateToProps = (state) => ({
	status: state.status
});

export default connect(mapStateToProps)(ButtonMod);
