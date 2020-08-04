import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CategoryList from "./CategoryList";

// const Container = styled.div`
//   // font-size: 16px;
//   background-color: tomato;
//   margin: 0;
//   height: 100vh;
//   // width: 100vw;
//   // padding: 1rem;
// `;

const Header = styled.h3`
  color: skyblue;
  margin: 0 0 1vw 0;
  font-size: 2rem;
  font-weight: bold;
`;

const Box = styled.div`
  color: peachpuff;
  padding: .5vw;
  outline: 1px dashed skyblue;
  overflow: hidden;
`;

const Grid = styled.section`
  background: linear-gradient(to right, #144673, #3d71d9);
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  width: 84vw;
  grid-template: 28vh / 56vw 28.1vw;
`;

function DeckStacker() {
  return (
    <Grid>
      <Box>
        <Header>Deck Stacker (purely ornamental for now)</Header>
        <CategoryList/>
        {/* CategoryList will go here */}
        
      </Box>
      <Box>b</Box>
    </Grid>
  );
}

export default connect(/*mapStateToProps*/)(DeckStacker);
