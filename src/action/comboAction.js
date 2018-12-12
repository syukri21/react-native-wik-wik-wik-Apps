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

export { addComboAction, resetComboAction, changeStatusAction, changePatternAction };
