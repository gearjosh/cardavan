import React from 'react';
import CardBuilder from './components/CardController';
import CardShower from './components/CardShower';
import DeckList from "./components/DeckList";
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  // font-size: 16px;
  background-color: tomato;
  margin: 0;
  height: 100vh;
  // width: 100vw;
  // padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template: 100vh / 42vw 42vw 16vw;
`;

function App() {
  return (
    <Container>
      <Grid>
        <CardBuilder/>
        <CardShower/>
        <DeckList/>
      </Grid>

    </Container>
  );
}

export default connect(/*mapStateToProps*/)(App);
