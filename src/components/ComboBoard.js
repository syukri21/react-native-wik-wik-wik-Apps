import React from 'react';
import { View, H1, Badge, H3 } from 'native-base';
import { BoxShadow } from 'react-native-shadow';
import { connect } from 'react-redux';

class ComboBoard extends React.Component {
	render() {
		return (
			<View>
				<BoxShadow setting={shadowOpt('#dedede')}>
					<Badge
						style={{
							width           : 100,
							height          : 100,
							borderRadius    : 1000,
							justifyContent  : 'center',
							alignItems      : 'center',
							zIndex          : 200,
							backgroundColor : '#dedede'
						}}
					>
						<H1 style={{ color: 'black' }}>{this.props.combos}</H1>
						<H3>Combo</H3>
					</Badge>
				</BoxShadow>
			</View>
		);
	}
}

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
		width          : 100,
		height         : 100,
		borderRadius   : 1000,
		justifyContent : 'center',
		alignItems     : 'center',
		zIndex         : 200
	}
});

const mapStateToProps = (state) => ({
	combos : state.combos
});
export default connect(mapStateToProps)(ComboBoard);
