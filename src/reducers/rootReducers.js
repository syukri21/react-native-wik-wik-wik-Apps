const initState = {
	pattern      : [
		1,
		1,
		1,
		1,
		2,
		3,
		4,
		1,
		3,
		2
	],
	colorActive  : '#F9D35E',
	colorPattern : [
		'#F9D35E',
		'#BEDCF1',
		'#CC6B90',
		'#D1D300'
	]
};

const rootReducers = (state = initState, action) => {
	return state;
};

export default rootReducers;
