import React from 'react';

import { View, Text, CardItem, Card, H1 } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { hidden } from 'ansi-colors';
import { connect } from 'react-redux';

import { changeStatusAction, resetComboAction, changeGifAction } from '../action/comboAction';

class Loose extends React.Component {
	handlePress = () => {
		this.props.changeStatus(1);
		this.props.resetCombo();
		this.props.changeGif(6);
	};
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity
					style={{
						width          : '40%',
						height         : 80,
						justifyContent : 'center',
						alignItems     : 'center',
						zIndex         : 200,
						overflow       : 'hidden'
					}}
					onPress={this.handlePress}
				>
					<Image
						source={require('../assets/play.png')}
						style={{
							width  : '100%',
							height : 200
						}}
						resizeMode='stretch'
					/>
				</TouchableOpacity>
				<H1 style={{ color: 'white' }}>Your Score {this.props.combo}</H1>

				<Image
					style={{
						width     : '100%',
						height    : 300,
						transform : [ { translateY: -100 } ]
					}}
					source={require('../assets/wasted.png')}
					resizeMode='stretch'
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	combo : state.combos
});

const mapDispatchToProps = (dispatch) => ({
	changeStatus : (status) => dispatch(changeStatusAction(status)),
	resetCombo   : () => dispatch(resetComboAction()),
	changeGif    : (gifStatus) => dispatch(changeGifAction(gifStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(Loose);
