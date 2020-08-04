import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  // grid-auto-flow: column;
  grid-template-rows: 22vh;
  grid-template-columns: repeat(12, minmax(3vw, 6vw));
  overflow: hidden;
  // border: 1px solid red;
  grid-gap: 0.5vw;
  // padding: .5vw;
`;

const Box = styled.div`
  background-color: hotpink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .25vw;
  // max-width: 6vw;
`;

const TiltText = styled.h2`
  writing-mode: vertical-rl;
  margin: auto;
  transform: rotate(-180deg);
`;

const TiltButton = styled.h2`
  writing-mode: vertical-rl;
  margin: auto;
  transform: rotate(-180deg);
  cursor: pointer;
`;

function CategoryList() {
  return (
    <Grid>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
      <Box>
        <TiltButton>⬆️ ⬇️</TiltButton>
        <TiltText>I am a longer title</TiltText>
      </Box>
    </Grid>
  );
}

export default connect(/*mapStateToProps*/)(CategoryList);
