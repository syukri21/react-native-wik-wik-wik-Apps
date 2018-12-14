import React from 'react';
import {
	Container,
	Content,
	Text,
	List,
	Card,
	CardItem,
	Left,
	Right,
	Body,
	Thumbnail,
	H1
} from 'native-base';
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
	}

	renderItem = (item, key) => (
		<Card key={key}>
			<CardItem>
				<Left>
					<Thumbnail source={require('../assets/crown.png')} />
					<Body>
						<H1>{item.username.split(' ')[0]}</H1>
					</Body>
				</Left>
				<Right>
					<H1>{item.score}</H1>
				</Right>
			</CardItem>
		</Card>
	);
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
	scores : state.scores,
	user   : state.user
});

const mapDispatchToProps = (dispatch) => ({
	fetchLeaderboard : () => dispatch(fetchLeaderboard())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardScreen);
