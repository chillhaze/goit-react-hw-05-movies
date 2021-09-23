import React, { useState } from 'react';
import { HomePage } from 'components/pages/HomePage';
import { MoviesPage } from 'components/pages/MoviesPage';
import { MovieDetailsPage } from 'components/pages/MovieDetailsPage';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'components/Header';

export const App = () => {
  const [movieId, setMovieId] = useState(null);

  const handleMovieId = id => {
    setMovieId(id);
  };

  return (
    <>
      <Header title={'React Movies App'}></Header>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage title={'Tranding today'} onClick={handleMovieId} />
          </Route>

          <Route exact path="/movies">
            <MoviesPage onClick={handleMovieId} />
          </Route>

          <Route path="/movies/:movieId">
            {movieId && <MovieDetailsPage />}
          </Route>
        </Switch>
      </main>
    </>
  );
};
