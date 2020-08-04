import React /*, { useEffect, useState }*/ from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.section`
  grid-area: 1 / 3 / 3 / 3;
  display: grid;
  position: relative;
  grid-template-columns: 100%;
  grid-auto-rows: minmax(5rem, 5vh);
  overflow-y: auto;
  background-color: tomato;
`;
  
  const Box = styled.div`
  background-color: tomato;
  padding-left: 0.5vw;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #ff913b;
  cursor: pointer;
`;

const Text = styled.p`
  color: peachpuff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const HeaderBox = styled(Box)`
  position: sticky;
  top: 0;
  width: 100%;
`;

const Header = styled.h3`
  color: peachpuff;
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
      <HeaderBox>        
        <Header>Decklist</Header>
      </HeaderBox>
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
