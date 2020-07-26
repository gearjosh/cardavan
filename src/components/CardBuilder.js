import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BuildContainer = styled.section`
  // width: 40vw;
	color: hotpink;
	background-color: peachpuff;
  padding: 1rem;
  // max-width: 40%;
`;

const Input = styled.input`
	border: none;
	border-bottom: .125rem solid green;
	outline: none;
	width: 100%;
	margin-bottom: .5rem;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const Label = styled.label`
	color: steelblue;
	min-width: 7rem;
`;

const Button = styled.button`
	border: none;
  background-color: teal;
  color: ivory;
  // width: 50%;
`;


function Cardbuilder(props) {

  const [category, setCategory] = useState('Normal Travel');
  const categoryChange = (event) => {
    setCategory(event.target.value)
  }

  const [cardText, setCardText] = useState(
    "You walk, you eat some jerky, you drink some stale water, you get some sand in your boot. You know how it is, traveler."
  );
  const cardTextChange = (event) => {
    setCardText(event.target.value);
  };

  const [image, setImage] = useState(
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95a93d8c-f701-4cd4-9cf9-ffc64bf770a0/d4styk3-94366440-2b7c-4ba4-ad29-1369b0b3edfa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTVhOTNkOGMtZjcwMS00Y2Q0LTljZjktZmZjNjRiZjc3MGEwXC9kNHN0eWszLTk0MzY2NDQwLTJiN2MtNGJhNC1hZDI5LTEzNjliMGIzZWRmYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iI-j1IP4sEhzoCsnXaRRdVrwCZYfnkhYA8viC5YnXyE"
  );
  const imageChange = (event) => {
    setImage(event.target.value);
  };

  const add = () => {
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

	return (
    <BuildContainer>
      <Column>
        <Row>
          <Label htmlFor="category">Category</Label>
          <Input
            name="category"
            type="text"
            placeholder="Calamity, Monster, Pit Stop, etc."
            onChange={categoryChange}
          />
        </Row>
        <Row>
          <Label htmlFor="text">Text for Card</Label>
          <Input
            name="text"
            type="text"
            placeholder="You meet a traveler on the road..."
            onChange={cardTextChange}
          />
        </Row>
        <Row>
          <Label >Image Link</Label>
          <Input
            type="text"
            placeholder="www.coolpix.gov/desert_caravan.jpg"
            onChange={imageChange}
          />
        </Row>
        <Button onClick={add}>Add Card</Button>
      </Column>
      {/* <p>{category}</p>
      <p>{cardText}</p> */}
    </BuildContainer>
  );
}

export default connect(/*mapStateToProps*/)(Cardbuilder);
