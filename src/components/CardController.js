import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.section`
  // width: 40vw;
	color: hotpink;
	background-color: peachpuff;
  padding: 1rem;
  // max-width: 40%;
`;

const Input = styled.input`
	border: none;
	border-bottom: .125rem solid skyblue;
	outline: none;
	// width: 100%;
	margin-bottom: .5rem;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
// `;

const Header = styled.h3`
  color: #8779b3;
  margin: 0 0 1vw 0;
  font-size: 2.8rem;
  font-weight: bold;
`;

const Box = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
`;

const Label = styled.label`
	color: steelblue;
  font-size: 1.5rem;
`;

const Button = styled.button`
  border: none;
  background-color: #ff738a;
  color: ivory;
  padding: 1vw;
  font-size: 1.1rem;
  width: 100%;
  margin-bottom: 1vw;
`;

const SubButton = styled(Button)`
  border: none;
  background-color: tomato;
  color: ivory;
  padding: 1vw;
  font-size: 1.1rem;
  width: 100%;
  margin-bottom: 1vw;
`;

const caravanImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95a93d8c-f701-4cd4-9cf9-ffc64bf770a0/d4styk3-94366440-2b7c-4ba4-ad29-1369b0b3edfa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTVhOTNkOGMtZjcwMS00Y2Q0LTljZjktZmZjNjRiZjc3MGEwXC9kNHN0eWszLTk0MzY2NDQwLTJiN2MtNGJhNC1hZDI5LTEzNjliMGIzZWRmYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iI-j1IP4sEhzoCsnXaRRdVrwCZYfnkhYA8viC5YnXyE"

function CardController(props) {

  const [category, setCategory] = useState("Normal Travel");
  const categoryChange = (event) => {
    setCategory(event.target.value)
  }

  const [cardText, setCardText] = useState(
    "You walk, you eat some jerky, you drink some stale water, you get some sand in your boot. You know how it is, traveler."
  );
  const cardTextChange = (event) => {
    setCardText(event.target.value);
  };

  const [image, setImage] = useState(caravanImg);
  const imageChange = (event) => {
    setImage(event.target.value);
  };

  const add = () => {
    if (category < 1) {
      setCategory('Normal Travel')
    }
    if (cardText.length < 1) {
      setCardText("You walk, you eat some jerky, you drink some stale water, you get some sand in your boot. You know how it is, traveler.")
    }
    if (image.length < 5) {
      setImage(caravanImg);
    }
    const { dispatch } = props;
    dispatch({
      type: "ADD_CARD",
      card: {
        category: category,
        text: cardText,
        imageLink: image,
      }
    });
  };

  const shuffle = () => {
    const { dispatch } = props;
    dispatch({
      type: "SHUFFLE"
    });
  };

  const draw = () => {
    const { dispatch } = props;
    if (props.drawPile.length < 1) {
      dispatch({
        type: "SHUFFLE"
      });
      dispatch({
        type: "DRAW",
      });
    } else {
      dispatch({
        type: "DRAW"
      })
    }
  }

  let drawButton;
  if (props.shuffled) {
    drawButton = <SubButton onClick={draw}>Draw</SubButton>;
  } else {
    drawButton = null;
  }

	return (
    <Container>
      <Header>Cardavan β</Header>
      <Column>
        <Box>
          <Label htmlFor="category">Category</Label>
          <Input
            name="category"
            type="text"
            placeholder="Calamity, Monster, Pit Stop, etc."
            onChange={categoryChange}
          />
        </Box>
        <Box>
          <Label htmlFor="text">Text for Card</Label>
          <Input
            name="text"
            type="text"
            placeholder="You meet a traveler on the road..."
            onChange={cardTextChange}
          />
        </Box>
        <Box>
          <Label>Image Link</Label>
          <Input
            type="text"
            placeholder="www.coolpix.gov/desert_caravan.jpg"
            onChange={imageChange}
          />
        </Box>
        <Button onClick={add}>Add Card</Button>
        <Button onClick={shuffle}>Shuffle Deck</Button>
        {drawButton}
      </Column>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    deck: state.deck,
    drawPile: state.drawPile,
    shuffled: state.shuffled,
  };
};

export default connect(mapStateToProps)(CardController);
