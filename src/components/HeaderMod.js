import React from 'react';
import { Header, View, Text, H3 } from 'native-base';
import ButtonTop from './ButtonTop';

import { styles } from './headerModStyles';

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

export default HeaderMod;
