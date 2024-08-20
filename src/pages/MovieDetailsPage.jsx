import { useEffect, useRef, useState } from "react";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchDetailsMovie } from "../services/APIes";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Navigation from "../components/Navigation/Navigation";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchDetailsMovie(movieId);
        setMovie(data);
        return data;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Navigation />
      <main>
        <GoBackBtn to={goBack.current}>Go Back</GoBackBtn>
        {isLoading && <Loader />}
        {error && <Error />}
        {!error && <MovieDetails {...movie} />}
        {!error && <NavLink to="cast">Cast</NavLink>}
        {!error && <NavLink to="reviews">Reviews</NavLink>}
        <Outlet />
      </main>
    </>
  );
};

export default MovieDetailsPage;
