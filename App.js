import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screen
import HomeScreen from './src/screens/HomeScreen';

const AppNavigator = createStackNavigator(
	{
		HomeScreen : {
			screen : HomeScreen
		}
	},
	{
		initialRouteName : 'HomeScreen'
	}
);

export default createAppContainer(AppNavigator);
