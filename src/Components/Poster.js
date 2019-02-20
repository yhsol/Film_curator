import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`font-size: 14px;`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	height: 180px;
	background-size: cover;
	border-radius: 2px;
	transition: opacity .1s linear;
`;

const Rating = styled.span`
	position: absolute;
	top: 159px;
	right: 5px;
	opacity: 0;
	transition: opacity .2s linear;
`;

const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;

const Title = styled.span`
	display: block;
	margin-bottom: 3px;
`;

const Year = styled.span`
	font-size: 14;
	color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<ImageContainer>
				<Image
					bgUrl={
						imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('../assets/noPosterSmall.jpg')
					}
				/>
				<Rating>
					<span aria-label="rating">● </span>
					{rating}/10
				</Rating>
				<Title>{title.length > 17 ? `${title.substring(0, 17)}...` : title}</Title>
				<Year>{year}</Year>
			</ImageContainer>
		</Container>
	</Link>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
};

export default Poster;
