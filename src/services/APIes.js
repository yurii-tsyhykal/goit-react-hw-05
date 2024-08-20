import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org";
// axios.defaults.headers.common["Authorization"] =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdjZGE2ZWFmZGU3ZWJhZWQxZTkwMDE3NWNlYjg4NiIsIm5iZiI6MTcyNDA3MDg3MC4xODM4NjMsInN1YiI6IjY2YzBhZWVlOTU0MDdmOWVjZWMyMDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0pQ1u1JmT_tbdtVnAsvoDCWAVUXT2coMOmbcSve5Z8";

export const fetchTrendingMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdjZGE2ZWFmZGU3ZWJhZWQxZTkwMDE3NWNlYjg4NiIsIm5iZiI6MTcyNDA3MDg3MC4xODM4NjMsInN1YiI6IjY2YzBhZWVlOTU0MDdmOWVjZWMyMDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0pQ1u1JmT_tbdtVnAsvoDCWAVUXT2coMOmbcSve5Z8",
    },
  };

  const data = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);
  return data;
};

export const fetchDetailsMovie = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdjZGE2ZWFmZGU3ZWJhZWQxZTkwMDE3NWNlYjg4NiIsIm5iZiI6MTcyNDA3MDg3MC4xODM4NjMsInN1YiI6IjY2YzBhZWVlOTU0MDdmOWVjZWMyMDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0pQ1u1JmT_tbdtVnAsvoDCWAVUXT2coMOmbcSve5Z8",
    },
  };

  const data = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);

  return data;
};

export const fetchCastOfMovie = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdjZGE2ZWFmZGU3ZWJhZWQxZTkwMDE3NWNlYjg4NiIsIm5iZiI6MTcyNDA3MDg3MC4xODM4NjMsInN1YiI6IjY2YzBhZWVlOTU0MDdmOWVjZWMyMDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0pQ1u1JmT_tbdtVnAsvoDCWAVUXT2coMOmbcSve5Z8",
    },
  };

  const data = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);

  return data;
};

export const fetchReviewsOfMovie = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdjZGE2ZWFmZGU3ZWJhZWQxZTkwMDE3NWNlYjg4NiIsIm5iZiI6MTcyNDA3MDg3MC4xODM4NjMsInN1YiI6IjY2YzBhZWVlOTU0MDdmOWVjZWMyMDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0pQ1u1JmT_tbdtVnAsvoDCWAVUXT2coMOmbcSve5Z8",
    },
  };

  const data = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);
  return data;
};

export const fetchSearchQueryOfMovie = async (q) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie`,
    params: { query: `${q}`, include_adult: "false", language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdjZGE2ZWFmZGU3ZWJhZWQxZTkwMDE3NWNlYjg4NiIsIm5iZiI6MTcyNDA3MDg3MC4xODM4NjMsInN1YiI6IjY2YzBhZWVlOTU0MDdmOWVjZWMyMDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0pQ1u1JmT_tbdtVnAsvoDCWAVUXT2coMOmbcSve5Z8",
    },
  };

  const data = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);

  return data;
};
