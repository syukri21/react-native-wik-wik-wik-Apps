const addComboAction = (combo) => ({
	type  : 'ADD_COMBO',
	combo
});

const resetComboAction = () => ({
	type : 'RESET_COMBO'
});

const changeStatusAction = (status) => ({
	type   : 'LOOSE_COMBO',
	status
});

export { addComboAction, resetComboAction, changeStatusAction };
