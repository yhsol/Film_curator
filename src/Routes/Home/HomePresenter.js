import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`padding: 30px 20px;`;

const HomePresenter = ({ nowPlaying, popular, upComing, error, loading }) => (
	<React.Fragment>
		<Helmet>
			<title>Movies | Movie Curator</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{nowPlaying &&
				nowPlaying.length > 0 && (
					<Section title="Now Playing">
						{nowPlaying.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.original_title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{upComing &&
				upComing.length > 0 && (
					<Section title="Upcoming">
						{upComing.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.original_title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{popular &&
				popular.length > 0 && (
					<Section title="Popular">
						{popular.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.original_title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{error && <Message color="#fa983a" text={error} />}
			</Container>
		)};
	</React.Fragment>
);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upComing: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default HomePresenter;
