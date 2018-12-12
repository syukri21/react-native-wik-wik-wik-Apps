import React from 'react';
import { View, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

class LightUp extends React.Component {
	getRef = (ref) => {
		this.view = ref;
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.color) {
			this.view.fadeIn();
		}
	}
	render() {
		return (
			<Animatable.View animation='zoomIn' ref={this.getRef} style={styles.container}>
				<BoxShadow setting={shadowOpt(this.props.color)}>
					<Button rounded style={styles.button} disabled>
						<Text>Test</Text>
					</Button>
				</BoxShadow>
			</Animatable.View>
		);
	}
}

const styles = StyleSheet.create({
	button    : {
		width           : 100,
		height          : 100,
		position        : 'absolute',
		alignSelf       : 'center',
		backgroundColor : 'transparent',
		elevation       : 20
	},
	container : {
		width     : 100,
		height    : 100,
		position  : 'absolute',
		alignSelf : 'center'
	}
});

const shadowOpt = (color) => ({
	width   : 100,
	height  : 100,
	color   : color || '#fff',
	border  : 10,
	radius  : 50,
	opacity : color ? 0.8 : 0.1,
	x       : 0,
	y       : 0,
	style   : {
		width     : 100,
		height    : 100,
		position  : 'absolute',
		alignSelf : 'center'
	}
});

export default LightUp;
