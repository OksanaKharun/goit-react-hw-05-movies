import { searchMovieByCast } from '../components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from 'images/notFound.jpg';


const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    searchMovieByCast(moviesId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  return (
    <ul className='list-style'>
      {cast &&
        cast.map(({ character, profile_path, name, id }) => (
          <li key={id} className='li-style'>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : image
              }
              alt={name}
              width="140"
              height="175"
            />
            <div>
              <h3>{name}</h3>
              <h4>Character: </h4>
              <p>{character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;



  
