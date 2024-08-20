import { useParams } from "react-router-dom";
import { fetchReviewsOfMovie } from "../../services/APIes";
import { useEffect, useState } from "react";
import { transformDateFormat } from "../../helpers/date";
import css from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      const { results } = await fetchReviewsOfMovie(movieId);
      setReviews(results);
    };
    fetchData();
  }, [movieId]);
  console.log(reviews);
  return (
    <div className={css.reviewsBox}>
      {reviews.length === 0 ? (
        <p>We don&#39;t have any reviews for this movie</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content, created_at }) => {
            return (
              <li key={id} className={css.reviewsListItem}>
                <div>
                  <h3 className={css.reviewsTitle}>{author}</h3>
                  <p className={css.reviewsDate}>
                    {transformDateFormat(created_at)}
                  </p>
                  <p className={css.reviewsText}>{content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
