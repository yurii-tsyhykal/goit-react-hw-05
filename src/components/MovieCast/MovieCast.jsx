import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastOfMovie } from "../../services/APIes";
import css from "./MovieCast.module.css";


const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      const { cast } = await fetchCastOfMovie(movieId);
      setCast(cast);
    };
    fetchData();
  }, [movieId]);
  return (
    <>
      <ul className={css.castList}>
        {cast.length > 0 &&
          cast
            .filter(({ profile_path }) => profile_path !== null)
            .map(({ id, profile_path, original_name, character }) => {
              return (
                <li key={id} className={css.castListItem}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                    alt={original_name}
                    className={css.castImage}
                  />
                  <div className={css.castBoxDescr}>
                    <p className={css.castDescription}>{original_name}</p>
                    <p className={css.castDescription}>Character:</p>
                    <p className={css.castDescription}>{character}</p>
                  </div>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default MovieCast;
