import { useState, useEffect } from 'react';

import * as mooviesAPI from '../../../api-services/fetch-api';
import defaultAvaatarImage from '../../../images/no-avatar.jpg';
// для фильмов актера в модалке
// import ActorMovies from '../ActorMovies/ActorMovies';
// import { NavLink, Route, useRouteMatch } from 'react-router-dom';

import {
  Overlay,
  PersonContainer,
  Avatar,
  Name,
  FullDate,
  BirthDate,
  PlaceOfBirth,
  DeathDate,
  Biography,
} from './Person.styled';

function Person({ id, onClose }) {
  const [status, setStatus] = useState('idle');
  const [person, setPerson] = useState(null);
  const [personDetails, setPersonDetails] = useState({});
  // для фильмов актера в модалке
  // const { url, path } = useRouteMatch();

  useEffect(() => {
    setPerson(id);

    if (person === null) {
      return;
    }
    setStatus('pending');
    mooviesAPI
      .fetchActorDetails(person)
      .then(data => {
        setPersonDetails(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
      });
    setStatus('idle');
  }, [id, person]);

  useEffect(() => {
    // Вешаю слушателя
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Снимаю слуашателя
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Метод закрытия модального окна по кнопке Esc
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // Метод закрытия модального окна по бекдропу
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const { biography, birthday, deathday, name, place_of_birth, profile_path } =
    personDetails;
  const parsedBirthday = new Date(birthday);
  const parsedDeathday = new Date(deathday);

  const date = fullDate =>
    `${fullDate.getDate()}.${
      fullDate.getMonth() + 1
    }.${fullDate.getFullYear()}`;

  const imageUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;

  return (
    <Overlay onClick={handleBackdropClick}>
      <PersonContainer>
        <Avatar>
          <img
            src={profile_path ? imageUrl : defaultAvaatarImage}
            alt={`${name}`}
          />
        </Avatar>
        <Name>{name}</Name>
        <FullDate>
          <BirthDate>{date(parsedBirthday)}</BirthDate>
          <PlaceOfBirth>({place_of_birth})</PlaceOfBirth>
          {deathday && <DeathDate>{date(parsedDeathday)}</DeathDate>}
        </FullDate>

        <Biography> {biography}</Biography>
        {/* фильмы актера в модалке */}
        {/* <NavLink to={`${url}/${id}`}>movies with {name}</NavLink>
        <Route path={`${path}/:id`}>{id && <ActorMovies props={id} />}</Route> */}
      </PersonContainer>
    </Overlay>
  );
}

export default Person;
