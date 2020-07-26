export default (state = {
  deck: [],
  shuffled: false,
  selectedCard: NaN,
  drawPile: [],
  discardPile: [],
  flippedCard: null,
}, action) => {
  let newState
	switch (action.type) {
    // case "BLANK":
    //   newState = { ...state,  };
    //   return newState;
    case "ADD_CARD":
      const newCard = { ...action.card, id: state.deck.length };
      const newDeck = state.deck.concat(newCard);
      newState = { ...state, deck: newDeck, selectedCard: newDeck.length - 1, flippedCard: null };
      return newState;
    case "SELECT":
      newState = { ...state, selectedCard: action.id, flippedCard: null };
      return newState;
    case "SHUFFLE":
      const shuffle = (ary) => {
        const arySafe = [...ary]
        console.log('arySafe: ', arySafe)
        for (let i = arySafe.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arySafe[i], arySafe[j]] = [arySafe[j], arySafe[i]];
        }
        return arySafe;
      };
      const shuffledDeck = shuffle(state.deck);
      newState = { ...state, 
        shuffled: true,
        drawPile: shuffledDeck,
        discardPile: [],
        flippedCard: {
          category: '        ',
          text: '        ',
          imageLink: "https://vignette.wikia.nocookie.net/kallipolis/images/b/b9/06e0e2ef131bd61eb4fa3a3d19e749d1.png/revision/latest?cb=20180926064526"
        }
      };
      return newState;
    case "DRAW":
      const drawnCard = state.drawPile[0];
      const newDrawPile = state.drawPile.splice(1);
      const newDiscardPile = state.discardPile.concat(drawnCard);
      newState = { ...state, flippedCard: drawnCard, drawPile: newDrawPile, discardPile: newDiscardPile }
      return newState;
    default:
      return state;
  }
}