import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	padding: 50px;
`;

const Text = styled.span`
	color: ${(props) => props.color};
	font-size: 30px;
	font-weight: 440px;
`;

const Message = ({ text, color }) => (
	<Container>
		<Text color={color}>{text}</Text>
	</Container>
);

Message.Proptypes = {
	text: Proptypes.string.isRequired,
	color: Proptypes.string.isRequired
};

export default Message;
