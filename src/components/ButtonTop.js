import React from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	StyleSheet,
	Text,
	ImageBackground
} from 'react-native';
import { H3, Button, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { fetchDataUserAction, fetchUser, resetUserDataAction } from '../action/userAction';

import { styles } from './buttonTopStyles';
import { dispatch } from 'rxjs/internal/observable/range';

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

	state = {
		isLogin : false
	};

	isRight = () => {
		return this.props.children.toLowerCase() === 'connect';
	};

	handleRefView = (ref) => (this.view = ref);

	onLogout = async () => {
		this.setState({
			isLogin : false
		});
		await LoginManager.logOut();
		this.props.resetUser();
		alert('Anda Berhasil Logout');
	};

	bounce = () =>
		this.view.animate('ZoomInOut', 200).then(() => {
			if (this.props.children.toLowerCase() === 'leaderboards') {
				this.props.navigation.navigate('LeaderboardScreen');
			}

			if (this.props.children.toLowerCase() === 'connect') {
				LoginManager.logInWithReadPermissions([ 'public_profile' ]).then(
					(result) => {
						this.setState({
							isLogin : true
						});
						return (
							!result.isCancelled && this.props.getConnect && this.props.fetchUser()
						);
					},
					function(error) {
						console.log('Login fail with error: ' + error);
					}
				);
			}
		});

	componentDidMount() {}

	render() {
		let { nama } = this.props.user;
		nama = nama && nama.split(' ')[0];
		return (
			<View style={styles.button}>
				{this.props.getConnect &&
				this.state.isLogin && (
					<Right>
						<Button
							onPress={this.onLogout}
							rounded
							style={{ paddingHorizontal: 10, height: 20, alignItems: 'flex-end' }}
							info
						>
							<Text style={{ color: 'white' }}>Logout</Text>
						</Button>
					</Right>
				)}

				<TouchableWithoutFeedback style={styles.button} onPress={this.bounce}>
					<Animatable.View ref={this.handleRefView} style={styles.button} easing='linear'>
						<ImageBackground
							source={image[this.props.children.toLowerCase()]}
							style={styles.buttonImage(this.isRight())}
							resizeMode='contain'
						>
							<Text style={styles.textButton(this.isRight())}>
								{(this.props.children === 'Connect' && nama) || this.props.children}
							</Text>
						</ImageBackground>
					</Animatable.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	user : state.user
});

const mapDispacthToProps = (dispatch) => ({
	fetchUser : (user) => dispatch(fetchUser(user)),
	resetUser : () => dispatch(resetUserDataAction())
});

export default connect(mapStateToProps, mapDispacthToProps)(ButtonTop);
