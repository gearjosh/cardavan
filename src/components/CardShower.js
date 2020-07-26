import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Cardtainer = styled.section`
  background: linear-gradient(to right, skyblue, violet);
  padding: 1vw;
  `;

const Card = styled.div`
  display: grid;
  grid-template: 1fr 6fr 4fr / 100%;
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
  let cardGuts;
  if (props.deck.length > 0) {
    cardGuts = (
      <React.Fragment>
        <h1>{props.deck[props.selectedCard].category}</h1>
        <Image
          src={props.deck[props.selectedCard].imageLink}
          alt="card"
        />
        <p>{props.deck[props.selectedCard].text}</p>
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
    selectedCard: state.selectedCard
  };
};

export default connect(mapStateToProps)(CardShower);