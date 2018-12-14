import React from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	StyleSheet,
	Text,
	ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LoginManager } from 'react-native-fbsdk';

import { styles } from './buttonTopStyles';

const image = {
	leaderboards : require('../assets/buttonAlt2Crown.png'),
	connect      : require('../assets/buttonAlt2fb.png')
};

const ZoomInOut = {
	0   : {
		opacity : 1,
		scale   : 1
	},
	0.5 : {
		opacity : 1,
		scale   : 0.9
	},
	1   : {
		opacity : 1,
		scale   : 1
	}
};

Animatable.initializeRegistryWithDefinitions({
	ZoomInOut : ZoomInOut
});

class ButtonTop extends React.Component {
	static navigationOptions = {
		title  : 'HOME',
		header : null
	};

	isRight = () => {
		return this.props.children.toLowerCase() === 'connect';
	};

	_responseInfoCallback(error: ?Object, result: ?Object) {
		alert('meow response');
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			alert('Success fetching data: ' + result.toString());
			console.log(result);
		}
	}

	testRequestGraphAPI() {
		const infoRequest = new GraphRequest(
			'/me?fields=id,name,email',
			null,
			this._responseInfoCallback
		);
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	handleRefView = (ref) => (this.view = ref);

	bounce = () =>
		this.view.animate('ZoomInOut', 200).then(() => {
			if (this.props.children.toLowerCase() === 'leaderboards') {
				this.props.navigation.navigate('LeaderboardScreen');
			}

			if (this.props.children.toLowerCase() === 'connect') {
				LoginManager.logInWithReadPermissions([ 'public_profile' ]).then(
					function(result) {
						if (result.isCancelled) {
							console.log('Login cancelled');
						} else {
							console.log(
								'Login success with permissions: ' +
									result.grantedPermissions.toString()
							);
						}
					},
					function(error) {
						console.log('Login fail with error: ' + error);
					}
				);
			}
		});

	render() {
		return (
			<View style={styles.button}>
				<TouchableWithoutFeedback style={styles.button} onPress={this.bounce}>
					<Animatable.View ref={this.handleRefView} style={styles.button} easing='linear'>
						<ImageBackground
							source={image[this.props.children.toLowerCase()]}
							style={styles.buttonImage(this.isRight())}
							resizeMode='contain'
						>
							<Text style={styles.textButton(this.isRight())}>
								{this.props.children}
							</Text>
						</ImageBackground>
					</Animatable.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

export default ButtonTop;
