const addComboAction = (combo) => ({
	type  : 'ADD_COMBO',
	combo
});

const resetComboAction = () => ({
	type : 'RESET_COMBO'
});

export { addComboAction, resetComboAction };
