import React from 'react';
import { Header, View, Text, H3 } from 'native-base';
import { StyleSheet } from 'react-native';
import ButtonTop from './ButtonTop';

class HeaderMod extends React.Component {
	render() {
		return (
			<Header style={styles.header} noShadow rounded>
				<View style={{ flex: 1 }}>
					<ButtonTop>Leaderboards</ButtonTop>
				</View>
				<View style={{ flex: 1 }}>
					<ButtonTop>Connect</ButtonTop>
				</View>
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	header : {
		backgroundColor : 'transparent',
		height          : 100,
		paddingTop      : 10
	}
});

export default HeaderMod;
