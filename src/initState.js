export const initState = {
	pattern      : [ 1, 1, 1 ],
	batchPattern : [ [ 1, 2, 3 ], [ 2, 2, 1 ], [ 3, 3, 1 ] ],
	combos       : 0,
	user         : {
		id          : null,
		nama        : null,
		highCombo   : null,
		latestCombo : null
	},
	// status 0 : ready, 1: playing, 2: loose
	status       : 0,
	// status 0 : wikwik, 1 : uhuhuh, 2: ihihih, 3: ahahah, -1: default, 4: loose
	gifStatus    : 6,
	scores       : {
		items   : [],
		loading : false,
		error   : null
	}
};
