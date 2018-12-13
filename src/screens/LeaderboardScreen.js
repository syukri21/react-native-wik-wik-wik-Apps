import React from 'react';
import { Container, Content, Text, List, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import { fetchLeaderboard } from '../action/leaderboardAction';

class LeaderboardScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ds : new ListView.DataSource({
				rowHasChanged : (r1, r2) => r1 !== r2
			})
		};
	}

	static navigationOptions = {
		title : 'Top Scores Leaderboard'
	};

	async componentDidMount() {
		await this.props.fetchLeaderboard();
		alert(JSON.stringify(this.props.scores));
	}

	renderItem = (item, key) => <Text key={key}>{item.username}</Text>;
	renderRightHiddenRow = (item) => <Text>{item.score}</Text>;
	render() {
		return (
			<Container>
				<Content>
					<List
						renderRow={this.renderItem}
						rightOpenValue={-100}
						dataSource={this.state.ds.cloneWithRows(this.props.scores.items)}
						renderRightHiddenRow={this.renderRightHiddenRow}
					/>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	scores : state.scores
});

const mapDispatchToProps = (dispatch) => ({
	fetchLeaderboard : () => dispatch(fetchLeaderboard())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardScreen);
