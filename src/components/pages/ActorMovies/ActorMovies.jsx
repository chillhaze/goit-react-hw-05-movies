import { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import * as mooviesAPI from '../../../api-services/fetch-api';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

import {
  Wrapper,
  Title,
  LoaderWrapper,
  List,
  ListItem,
  MovieImg,
  MovieName,
} from './ActorMovies.styled';
import defaultImage from '../../../images/poster-not-available.jpg';
import Loader from 'react-loader-spinner';

function ActorMovies({ title, props, onClick }) {
  const [status, setStatus] = useState('idle');
  const [actorId, setActorId] = useState(null);
  const [actorMovies, setActorMovies] = useState([]);

  useEffect(() => {
    setActorId(props);

    if (actorId === null) {
      return;
    }
    setStatus('pending');
    mooviesAPI
      .fetchActorMovies(actorId)
      .then(data => {
        setActorMovies(data.cast);

        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
      });
    setStatus('idle');
  }, [actorId, props]);

  return (
    <Wrapper>
      <Title>{title}</Title>
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
        <List>
          {actorMovies.map(item => {
            const { id, original_title, title, name, poster_path } = item;

            let imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
            if (poster_path === null) {
              imageUrl = defaultImage;
            }
            return (
              <ListItem key={id}>
                <Link
                  to={`/movies/${id}`}
                  onClick={() => {
                    onClick(id);
                  }}
                  name={id}
                >
                  <MovieImg
                    // src={poster_path ? imageUrl : defaultImage}
                    src={imageUrl}
                    alt={title}
                  />
                  <MovieName>
                    {title ? title : original_title || name}
                  </MovieName>
                </Link>

                <Route exact path={`movies/${id}`}>
                  {id ? <Redirect to="/" /> : <MovieDetailsPage />}
                </Route>
              </ListItem>
            );
          })}
        </List>
      )}
    </Wrapper>
  );
}

export default ActorMovies;
