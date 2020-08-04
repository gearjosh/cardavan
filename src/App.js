import React from 'react';
import CardBuilder from './components/CardController';
import CardShower from './components/CardShower';
import DeckList from "./components/DeckList";
import DeckStacker from './components/DeckStacker';
import { connect } from 'react-redux';
import styled from 'styled-components';

  const Grid = styled.div`
  margin: 0;
  height: 100vh;
  display: grid;
  width: 100%;
  grid-template: 72vh 28vh / 42vw 42vw 16vw;
`;

function App() {
  return (
    <Grid>
      <CardBuilder/>
      <CardShower/>
      <DeckList/>
      <DeckStacker/>
    </Grid>
  );
}

export default connect(/*mapStateToProps*/)(App);
