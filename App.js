import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screen
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import ButtonTop from './src/components/ButtonTop';

const AppNavigator = createStackNavigator(
	{
		HomeScreen        : {
			screen : HomeScreen
		},
		LeaderboardScreen : {
			screen : LeaderboardScreen
		}
	},
	{
		initialRouteName : 'HomeScreen'
	}
);

export default createAppContainer(AppNavigator);
