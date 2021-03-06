import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as mooviesAPI from '../../../api-services/fetch-api';
import Loader from 'react-loader-spinner';

import {
  ReviewInfo,
  ReviewList,
  Review,
  Author,
  Content,
  ReviewAccent,
  LoaderWrapper,
} from './Reviews.styled';

function Reviews() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState(params.movieId);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (movieId) {
      setStatus('pending');

      mooviesAPI
        .fetchReviews(movieId)
        .then(data => {
          setMovie(data);
          setStatus('resolved');
          scrollDown();
        })
        .catch(error => {
          console.log(error);
        });

      setMovieId(null);
      setStatus('idle');
    }
  }, [movieId]);

  const scrollDown = () => {
    return window.scrollTo({
      top: `${window.innerWidth < 550 ? 920 : 460}`,
      behavior: 'smooth',
    });
  };

  const reviews = movie.results;

  return (
    <ReviewInfo>
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

      {status === 'resolved' && reviews.length === 0 && (
        <p>we don't have any reviews for this movie</p>
      )}

      {status === 'resolved' && reviews && (
        <ReviewList>
          {reviews.map((review, index) => {
            const { author, content } = review;
            return (
              <Review key={index}>
                <Author>
                  Name: <ReviewAccent>{author}</ReviewAccent>
                </Author>

                <Content>{content}</Content>
              </Review>
            );
          })}
        </ReviewList>
      )}
    </ReviewInfo>
  );
}

export default Reviews;
