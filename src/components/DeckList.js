import React /*, { useEffect, useState }*/ from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  position:relative;
  grid-template-columns: 100%;
  grid-auto-rows: minmax(5rem, 5vh);
  overflow-y: auto;
`;

const Box = styled.div`
  padding-left: .5vw;
  box-sizing: border-box;
  border-bottom: .125vw solid white;
  cursor: pointer;
`;

const HeaderBox = styled(Box)`
  background-color: tomato;
  width: 100%;
`;

const Text = styled.p`
  color: indigo;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Header = styled.h3`
  color: white;
  margin: .75vw;
  font-size: 2.8rem;
  font-weight: bold;
`;

function DeckList(props) {


  const selectCard = (id) => {
    const { dispatch } = props;
    dispatch({
      type: "SELECT",
      id: id
    })
  }

  const Boxes = props.deck.map((card) => {
    return (
      <Box
        key={card.id}
        onClick={() => {
          selectCard(card.id);
        }}
      >
        <Text>
          <strong>{card.category}</strong>
        </Text>
        <Text>{card.text}</Text>
      </Box>
    );
  });

  return (

    <Container>
      <Box>        
        <Header>Decklist</Header>
      </Box>
      {Boxes}
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
