import css from "./MovieDetails.module.css";
const MovieDetails = ({
  poster_path,
  original_title,
  release_date,
  overview,
  genres,
  vote_average,
}) => {
  const releaseYear = release_date ? release_date.slice(0, 4) : "N/A";
  const userScore = (vote_average * 10).toFixed();
  return (
    <>
      <div className={css.wrapper}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
            alt={`poster of movie ${original_title}`}
          />
        </div>
        <div className={css.movieInfoBox}>
          {" "}
          <h2
            className={css.titleOfMovie}
          >{`${original_title} (${releaseYear})`}</h2>
          <p
            className={css.descriptionOfMovie}
          >{`User Score: ${userScore}%`}</p>
          <h3 className={css.subtitleOfMovie}>Overview</h3>
          <p className={css.descriptionOfMovie}>{overview}</p>
          <h3 className={css.subtitleOfMovie}>Genres</h3>
          <p className={css.descriptionOfMovie}>
            {genres && genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
