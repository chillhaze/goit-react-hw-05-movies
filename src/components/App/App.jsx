import React, { useState, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'components/Header';
import { LoaderElement } from 'components/LoaderElement/LoaderElement';
import NotFound from 'components/pages/NotFound/NotFound';

const HomePage = lazy(() =>
  import(
    'components/pages/HomePage/HomePage' /* webpackChunkName: "home-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    'components/pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    'components/pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

export const App = () => {
  const [movieId, setMovieId] = useState(null);

  const handleMovieId = id => {
    setMovieId(id);
  };

  return (
    <>
      <Header title={'React Movies App'}></Header>
      <main>
        <Suspense fallback={<LoaderElement />}>
          <Switch>
            <Route exact path="/">
              <HomePage title={'Tranding today'} onClick={handleMovieId} />
            </Route>

            <Route exact path="/movies">
              <MoviesPage onClick={handleMovieId} />
            </Route>

            <Route path="/movies/:movieId">
              {movieId && <MovieDetailsPage props={movieId} />}
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
};
