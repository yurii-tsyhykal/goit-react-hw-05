import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/APIes";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

const HomePage = () => {
  const [listOfTrends, setListOfTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendingMovies();
        setListOfTrends(results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      {listOfTrends.length > 0 && <MovieList MovieList={listOfTrends} />}
    </>
  );
};

export default HomePage;
