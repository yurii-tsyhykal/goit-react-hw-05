import { Link, useLocation } from "react-router-dom";
import ItemListOfTrends from "../ItemListOfTrends/ItemListOfTrends";
import css from "./MovieList.module.css";

const MovieList = ({ MovieList }) => {
  const location = useLocation();
  return (
    <ul className={css.listOfTrends}>
      {MovieList.map(({ id, original_title }) => (
        <ItemListOfTrends key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </ItemListOfTrends>
      ))}
    </ul>
  );
};

export default MovieList;
