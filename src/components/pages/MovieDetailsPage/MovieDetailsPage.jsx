import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  // useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  // Link,
} from 'react-router-dom';
import * as mooviesAPI from '../../../api-services/fetch-api';

import defaultImage from '../../../images/poster-not-available.jpg';
import Loader from 'react-loader-spinner';
import { LoaderElement } from '../../LoaderElement/LoaderElement';

import {
  LinksWrapper,
  Movie,
  MovieImg,
  Title,
  SubTitle,
  MovieContainer,
  Button,
  InfoWrapper,
  Info,
  InfoItem,
  Accent,
  ButtonInfo,
} from './MovieDetailsPage.styled';

const Cast = lazy(() =>
  import('../Cast/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews-page" */),
);

function MovieDetailsPage({ props, handleActorInfo }) {
  // const params = useParams();
  // const [movieId, setMovieId] = useState(params.movieId);
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState(props);
  const [status, setStatus] = useState('idle');
  const { url, path } = useRouteMatch();

  const location = useLocation();
  const history = useHistory();

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

  const handleBackButtonClick = () => {
    // если не передаю целый location в стейт
    //  history.push(location.state?.from ? location.state?.from : '/');
    history.push(
      location?.state?.from ? location?.state?.from?.location?.from : '/',
    );
  };

  const {
    poster_path,
    original_title,
    title,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;

  const userScore = `${vote_average * 10}%`;

  let imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  if (poster_path === null) {
    imageUrl = defaultImage;
  }

  return (
    <Movie>
      {status === 'pending' && <Loader />}

      {status === 'resolved' && (
        <>
          <Button type="button" onClick={handleBackButtonClick}>
            {`<< ${location?.state?.from?.label ?? 'Back'}`}
          </Button>
          {/* Можно button заменить на Link, тогда не нужен метод handleBackButtonClick */}
          {/* <Link to={location?.state?.from?.location ?? '/'}>
            {`<< ${location?.state?.from?.label ?? 'Back'}`}{' '}
          </Link> */}

          <MovieContainer>
            <MovieImg src={imageUrl} alt={title} />

            <InfoWrapper>
              <Title>{original_title || title}</Title>

              <Info>
                <InfoItem>
                  User Score: <Accent>{userScore}</Accent>
                </InfoItem>

                <InfoItem>
                  Realese date: <Accent>{release_date}</Accent>
                </InfoItem>
              </Info>
              <SubTitle>Overview</SubTitle>
              <Info>{overview}</Info>
              <SubTitle>Genres</SubTitle>
              <Info>{genres && genres.map(item => `${item.name},  `)}</Info>
            </InfoWrapper>
          </MovieContainer>

          <LinksWrapper>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location?.state?.from ?? '/',
                  label: 'Back to search',
                },
              }}
            >
              <ButtonInfo type="button">Cast</ButtonInfo>
            </NavLink>

            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location?.state?.from ?? '/',
                  label: 'Back to search',
                },
              }}
            >
              <ButtonInfo type="button">Reviews</ButtonInfo>
            </NavLink>
          </LinksWrapper>
        </>
      )}

      <Suspense fallback={<LoaderElement />}>
        <Route path={`${path}/cast`}>
          <Cast handleActorInfo={handleActorInfo} />
        </Route>
      </Suspense>

      <Suspense fallback={<LoaderElement />}>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </Movie>
  );
}

export default MovieDetailsPage;
