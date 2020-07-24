import React from 'react';
import CardBuilder from './components/CardBuilder';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  background-color: tomato;
  margin: 0;
  height: 100vh;
  width: 100vw;
  padding: .5rem;
`;

function App() {
  return (
    <Container>
      <h1 style={{marginTop: 0}}>
        I am your app.
      </h1>
      <CardBuilder/>
    </Container>
  );
}

export default connect(/*mapStateToProps*/)(App);
