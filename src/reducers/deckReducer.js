export default (state = {}, action) => {
	switch (action.type) {
		case 'TEST':
			const newState = {...state, test: true};
			return newState;
		default:
			return state;
	}
}