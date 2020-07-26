import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Cardtainer = styled.section`
  background: linear-gradient(to right, skyblue, violet);
  padding: 3vw 1vw 1vw 1vw;
`;

// const Header = styled.h3`
//   color: #edd0c5;
//   margin: 0 0 1vw 0;
//   font-size: 2.8rem;
//   font-weight: bold;
// `;

const Card = styled.div`
  display: grid;
  grid-template: 1fr 6fr 2fr / 100%;
  background-color: pink;
  border-radius: .5rem;
  padding: 1vw;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 36vw;
`;

function CardShower(props) {
  let showingCard;
  if (props.flippedCard) {
    showingCard = props.flippedCard;
  } else {
    showingCard = props.deck[props.selectedCard];
  }
  
  let cardGuts;
  if (props.deck.length > 0) {
    cardGuts = (
      <React.Fragment>
        <h1>{showingCard.category}</h1>
        <Image
          src={showingCard.imageLink}
          alt="card"
        />
        <p>{showingCard.text}</p>
      </React.Fragment>
    );
  } else {
    cardGuts = <p>Please make a card.</p>;
  }

  return (
    <Cardtainer>
        <Card>
          {cardGuts}
        </Card>
      </Cardtainer>
    );
}

const mapStateToProps = state => {
  return {
    deck: state.deck,
    selectedCard: state.selectedCard,
    flippedCard: state.flippedCard,
  };
};

export default connect(mapStateToProps)(CardShower);