import { useState, useEffect } from 'react';
import { NavLink, Route, useParams } from 'react-router-dom';
import * as mooviesAPI from '../../../api-services/fetch-api';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import defaultImage from '../../../images/poster-not-available.jpg';
import Loader from 'react-loader-spinner';

import {
  LinksWrapper,
  Movie,
  MovieImg,
  Title,
  SubTitle,
  MovieContainer,
  InfoWrapper,
  Info,
  Accent,
  LoaderWrapper,
} from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const params = useParams();
  // console.log(params);
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState(params.movieId);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    setStatus('pending');
    mooviesAPI
      .fetchByMoovieId(movieId)
      .then(data => {
        setMovie(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });
    setStatus('idle');
  }, [movieId]);

  const {
    poster_path,
    backdrop_path,
    original_title,
    title,
    vote_average,
    overview,
    genres,
  } = movie;

  const userScore = `${vote_average * 10}%`;
  let backdrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  let imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  if (poster_path === null) {
    imageUrl = defaultImage;
  }

  return (
    <Movie>
      {status === 'pending' && (
        <LoaderWrapper>
          <Loader
            type="TailSpin"
            color="#ff8d23"
            height={60}
            width={60}
            className="Loader"
          />
        </LoaderWrapper>
      )}

      {status === 'resolved' && (
        <>
          <MovieContainer>
            <MovieImg src={imageUrl} alt={title} />

            <InfoWrapper>
              <Title>{original_title || title}</Title>

              <Info>
                User Score: <Accent>{userScore}</Accent>
              </Info>
              <SubTitle>Overview</SubTitle>
              <Info>{overview}</Info>
              <SubTitle>Genres</SubTitle>
              <Info>{genres && genres.map(item => `${item.name},  `)}</Info>
            </InfoWrapper>
          </MovieContainer>

          <LinksWrapper>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </LinksWrapper>
        </>
      )}

      <Route path={`/movies/:movieId/cast`}>
        <Cast></Cast>
      </Route>

      <Route path={`/movies/:movieId/reviews`}>
        <Reviews />
      </Route>
    </Movie>
  );
};
