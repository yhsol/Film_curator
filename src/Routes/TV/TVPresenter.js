import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`padding: 30px 20px;`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
	<React.Fragment>
		<Helmet>
			<title>TV Shows | Movie Curator</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{airingToday &&
				airingToday.length > 0 && (
					<Section title="Airing Today">
						{airingToday.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								title={show.original_name}
								imageUrl={show.poster_path}
								rating={show.vote_average}
								year={show.first_air_date && show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
				{topRated &&
				topRated.length > 0 && (
					<Section title="Top Rated">
						{topRated.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								title={show.original_name}
								imageUrl={show.poster_path}
								rating={show.vote_average}
								year={show.first_air_date && show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
				{popular &&
				popular.length > 0 && (
					<Section title="Popular">
						{popular.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								title={show.original_name}
								imageUrl={show.poster_path}
								rating={show.vote_average}
								year={show.first_air_date && show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
				{error && <Message color="#fa983a" text={error} />}
			</Container>
		)};
	</React.Fragment>
);

TVPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default TVPresenter;
