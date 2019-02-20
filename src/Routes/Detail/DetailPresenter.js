import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 50px 100px;
`;

const BackDrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.3;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	z-index: 1;
	position: relative;
`;

const Cover = styled.div`
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	height: 90%;
	width: 35%;
	border-radius: 3px;
`;

const Data = styled.div`
	width: 75%;
	margin-left: 30px;
`;

const Title = styled.h3`
	font-size: 44px;
	margin: 20px 0px 10px;
`;

const InfoItemContainer = styled.div`margin: 15px 0px;`;

const InfoItem = styled.span`opacity: 0.8;`;

const Divider = styled.span`margin: 0px 10px;`;

const OverView = styled.p`
	font-size: 21px;
	opacity: 0.9;
	width: 80%;
	line-height: 1.1;
`;

const DetailPresenter = ({ result, error, loading }) =>
	loading ? (
		<React.Fragment>
			<Helmet>
				<title>Loading | Movie Curator</title>
			</Helmet>
			<Loader />
		</React.Fragment>
	) : error ? (
		<Message color="blue" text="Nothing Found" />
	) : (
		<React.Fragment>
			<Container>
				<Helmet>
					<title>
						{' '}
						{result.original_title ? result.original_title : result.original_name} | Movie Curator
					</title>
				</Helmet>
				<BackDrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
				<Content>
					<Cover
						bgImage={
							result.poster_path ? (
								`https://image.tmdb.org/t/p/original${result.poster_path}`
							) : (
								require('../../assets/noPosterSmall.jpg')
							)
						}
					/>
					<Data>
						<Title>{result.original_title ? result.original_title : result.original_name}</Title>
						<InfoItemContainer>
							<InfoItem>
								{result.release_date ? (
									result.release_date && result.release_date.substring(0, 4)
								) : (
									result.first_air_date && result.first_air_date.substring(0, 4)
								)}
							</InfoItem>
							<Divider> · </Divider>
							<InfoItem>{result.runtime ? result.runtime : result.episode_run_time} min</InfoItem>
							<Divider> · </Divider>
							<InfoItem>
								{result.genres &&
									result.genres.map(
										(genres, index) =>
											result.genres.length - 1 === index ? genres.name : `${genres.name} / `
									)}
							</InfoItem>
						</InfoItemContainer>
						<OverView>{result.overview}</OverView>
					</Data>
				</Content>
			</Container>
		</React.Fragment>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
