import React from 'react';
import { Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, View } from 'native-base';
import { connect } from 'react-redux';

import { styles, LinearGradientConfig } from './HomeStyle';
import ButtonActions from '../components/ButtonActions';
import HeaderMod from '../components/HeaderMod';
import MainAnimation from '../components/MainAnimation';
import ComboBoard from '../components/ComboBoard';

import { changeBatchPattern, changePatternAction } from '../action/comboAction';
const { width, height } = Dimensions.get('screen');

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'HOME',
		header: null
	};

	pattern = this.props.pattern;

	componentDidMount() {
		return fetch('http://10.0.2.2:3333/api/v1/admin')
			.then((res) => {
				if (res.status == 200) return res.json();
				return false;
			})
			.then((res) => {
				if (res) {
					this.props.changeBatchPattern(res.patterns);
					this.props.changePattern();
				}
			});
	}

	render() {
		return (
			<Container style={styles.container}>
				<Image
					style={styles.absolute(width, height)}
					source={require('../assets/background.jpg')}
					resizeMode='stretch'
				/>

				<LinearGradient
					style={styles.absolute(width, height)}
					{...LinearGradientConfig}
				/>
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
	pattern: state.pattern,
	combos: state.combos,
	status: state.status,
	user: state.user
});

const mapDispatchToProps = (dispatch) => ({
	changeBatchPattern: (patterns) => dispatch(changeBatchPattern(patterns)),
	changePattern: () => dispatch(changePatternAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
