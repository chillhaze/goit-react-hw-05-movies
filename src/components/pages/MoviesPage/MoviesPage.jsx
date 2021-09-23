import PropTypes from 'prop-types';
import React from 'react';
import { useState, useEffect } from 'react';
import * as mooviesAPI from '../../../api-services/fetch-api';
import { Link, useRouteMatch } from 'react-router-dom';
import defaultImage from '../../../images/poster-not-available.jpg';
import Loader from 'react-loader-spinner';

import {
  LoaderWrapper,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonLabel,
  MoviesPageContainer,
  List,
  ListItem,
  MovieImg,
  MovieName,
} from './MoviesPage.styled';

export const MoviesPage = ({ onClick }) => {
  const [searchItem, setSearchItem] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [status, setStatus] = useState('idle');

  const { url } = useRouteMatch();

  useEffect(() => {
    if (searchItem === '') {
      return;
    }
    setStatus('pending');
    mooviesAPI
      .fetchMooviesBySearch(searchItem)
      .then(data => {
        setSearchResult(data.results);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });
    setStatus('idle');
  }, [searchItem]);

  // Считываю результат поиска
  const handleFormChange = e => {
    setSearchItem('');
    setSearchItem(e.currentTarget.value.toLowerCase());
  };

  // Передаю результат поиска
  const handleSubmit = e => {
    e.preventDefault();
    if (searchItem.trim() === '') {
      console.log('empty field');
      return;
    }
    // onSubmit(searchItem);
    setSearchItem('');
  };
  return (
    <MoviesPageContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          value={searchItem}
          onChange={handleFormChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit" onClick={handleSubmit}>
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>
      </SearchForm>

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
          {searchResult.map(item => {
            const { id, original_title, title, name, poster_path } = item;
            let imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
            if (poster_path === null) {
              imageUrl = defaultImage;
            }
            return (
              <ListItem key={id}>
                <Link to={`${url}/${id}`} onClick={() => onClick(id)} name={id}>
                  <MovieImg
                    // src={poster_path ? imageUrl : defaultImage}
                    src={imageUrl}
                    alt={title}
                  />
                  <MovieName>
                    {title ? title : original_title || name}
                  </MovieName>
                </Link>
              </ListItem>
            );
          })}
        </List>
      )}
    </MoviesPageContainer>
  );
};

MoviesPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};