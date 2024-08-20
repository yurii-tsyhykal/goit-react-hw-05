import { useEffect, useState } from "react";
import { fetchSearchQueryOfMovie } from "../../services/APIes";
import MovieList from "../MovieList/MovieList";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  const query = searchParams.get("query");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.movie.value.trim();
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchSearchQueryOfMovie(query);
        setMoviesList(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <div>
        {isLoading && <Loader />}
        {error && <Error />}
        {!moviesList && <p>Such no results</p>}
        {moviesList && (
          <MovieList MovieList={moviesList} state={{ from: location }} />
        )}
      </div>
    </>
  );
};

export default SearchMovies;
