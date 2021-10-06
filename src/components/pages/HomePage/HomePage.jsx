import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as mooviesAPI from '../../../api-services/fetch-api';
import { Link } from 'react-router-dom';
import defaultImage from '../../../images/poster-not-available.jpg';
import Loader from 'react-loader-spinner';

import {
  HomePageContainer,
  Title,
  ListItem,
  List,
  MovieImg,
  MovieName,
  LoaderWrapper,
} from './HomePage.styled';

function HomePage({ title, onClick }) {
  const [result, setReult] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    mooviesAPI
      .fetchTrandingItems()
      .then(data => {
        setReult(data.results);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });

    setStatus('idle');
  }, []);

  return (
    <>
      <HomePageContainer>
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
            {result.map(item => {
              const { id, original_title, title, name, poster_path } = item;

              let imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
              if (poster_path === null) {
                imageUrl = defaultImage;
              }
              return (
                <ListItem key={id}>
                  <Link
                    to={`movies/${id}`}
                    onClick={() => onClick(id)}
                    name={id}
                  >
                    <MovieImg src={imageUrl} alt={title} />
                    <MovieName>
                      {title ? title : original_title || name}
                    </MovieName>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        )}
      </HomePageContainer>
    </>
  );
}

HomePage.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default HomePage;
