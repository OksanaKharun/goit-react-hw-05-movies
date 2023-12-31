import { searchMovieByReviews } from '../components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    searchMovieByReviews(moviesId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  return (
    <>
      {!!reviews.length ? (
        <ul>
          {reviews.map(({ content, author, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;