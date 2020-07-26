export default (state = {
  deck: [],
  selectedCard: NaN
}, action) => {
  let newState
	switch (action.type) {
    case "TEST":
      newState = { ...state, test: true };
      return newState;
    case "ADD_CARD":
      const newDeck = state.deck.concat(action.card);
      newState = { ...state, deck: newDeck, selectedCard: newDeck.length - 1}
      return newState;
    default:
      return state;
  }
}