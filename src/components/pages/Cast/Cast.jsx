import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as mooviesAPI from '../../../api-services/fetch-api';
import defaultAvaatarImage from '../../../images/no-avatar.jpg';
import Loader from 'react-loader-spinner';

import {
  CastInfo,
  CastList,
  Actor,
  ActorAvatar,
  ActorName,
  Character,
  InfoWrapper,
  LoaderWrapper,
} from './Cast.styled';

function Cast() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState(params.movieId);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (movieId === null) {
      return;
    }

    setStatus('pending');
    mooviesAPI
      .fetchActors(movieId)
      .then(data => {
        setMovie(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
      });
    setStatus('idle');
  }, [movieId]);

  const actors = movie.cast;

  return (
    <CastInfo>
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
        <CastList>
          {actors &&
            actors.map((actor, index) => {
              const { profile_path, character, name } = actor;
              const imageUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;
              return (
                <Actor key={index}>
                  <ActorAvatar
                    src={profile_path ? imageUrl : defaultAvaatarImage}
                    alt={name}
                  />
                  <InfoWrapper>
                    <ActorName>{name}</ActorName>
                    <Character>Character: {character}</Character>
                  </InfoWrapper>
                </Actor>
              );
            })}
        </CastList>
      )}
    </CastInfo>
  );
}

export default Cast;
