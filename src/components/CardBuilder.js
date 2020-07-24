import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BuildContainer = styled.div`
	color: hotpink;
	width: 40vw;
	min-width: 21rem; 
	height: 60 vw;
	background-color: peachpuff;
	padding: 1rem;
`;

const Input = styled.input`
	border: none;
	border-bottom: .125rem solid green;
	outline: none;
	// background-color: lightblue;
	width: 100%;
	margin-bottom: .5rem;
`;

const Cardegory = styled(Input)`
	font-size: 1.3rem;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const Label = styled.label`
	color: steelblue;
	min-width: 7rem;
`;

const Button = styled.button`
	border: none;
	background-color: teal;
`;

function Cardbuilder() {
	return (
		<BuildContainer>
			I am your Cardbuilder container.
			<Column>
			<Row>
				<Label for='category'>Category</Label>
				<Cardegory name='category' type='text' placeholder='Calamities, Coincidences, Enemies, etc.' />
			</Row>
			<Row>
				<Label for='text'>Text for Card</Label>
				<Input name='text' type='text' placeholder='You meet a traveler on the road...' />
			</Row>
			</Column>
		</BuildContainer>
	);
}

export default connect(/*mapStateToProps*/)(Cardbuilder);
