import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as mooviesAPI from '../../../api-services/fetch-api';
import defaultAvaatarImage from '../../../images/no-avatar.jpg';
import Loader from 'react-loader-spinner';
import Person from '../Person/Person';

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

function Cast({ handleActorInfo }) {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState(params.movieId);
  const [status, setStatus] = useState('idle');

  const [showModal, setShowModal] = useState(false);
  const [actorId, setActorId] = useState(null);

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

  const handleModalOpen = id => {
    // для фильмов актера в модалке
    // setShowModal(true);
    setActorId(id);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
              const { profile_path, character, name, id } = actor;
              const imageUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;
              return (
                <Actor
                  key={index}
                  onClick={() => {
                    handleModalOpen(id);
                    handleActorInfo(id, name);
                  }}
                >
                  <NavLink to={`/actors/${id}`}>
                    <ActorAvatar
                      src={profile_path ? imageUrl : defaultAvaatarImage}
                      alt={name}
                    />
                    <InfoWrapper>
                      <ActorName>{name}</ActorName>
                      <Character>Character: {character}</Character>
                    </InfoWrapper>
                  </NavLink>
                </Actor>
              );
            })}
        </CastList>
      )}

      {showModal && <Person id={actorId} onClose={handleModalClose} />}
    </CastInfo>
  );
}

export default Cast;
