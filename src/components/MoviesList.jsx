import { Link, useLocation } from 'react-router-dom';

import image from 'images/notFound.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className='list-style'>
      {movies &&
        movies.map(({ id, name, title, poster_path }) => (
          <li key={id} >
            <Link
              to={`/movies/${id}`}
              state={{ location }}
              className='li-style'
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : image
                }
                alt={title}
                
              />
              <span className='name-style'>{name || title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};