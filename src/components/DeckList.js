import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 5vh; 
`;

const Text = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
`;

function DeckList(props) {
  return (
    <Container>
      {props.deck.map((card) => {
        return (
          <div>
            <Text><strong>{card.category}</strong></Text>
            <Text>{card.text}</Text>
          </div>
        );
      })}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    selectedCard: state.selectedCard,
  };
};

export default connect(mapStateToProps)(DeckList);
