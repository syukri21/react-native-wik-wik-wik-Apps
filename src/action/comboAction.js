const addComboAction = (combo) => ({
	type  : 'ADD_COMBO',
	combo
});

const resetComboAction = () => ({
	type : 'RESET_COMBO'
});

const changeStatusAction = (status) => ({
	type   : 'CHANGE_STATUS',
	status
});

const changePatternAction = () => ({
	type : 'CHANGE_PATTERN'
});

const changeGifAction = (gifStatus) => ({
	type      : 'CHANGE_GIF',
	gifStatus
});

export {
	addComboAction,
	resetComboAction,
	changeStatusAction,
	changePatternAction,
	changeGifAction
};
