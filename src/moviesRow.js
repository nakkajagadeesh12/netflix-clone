import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./movieRow.css";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieRow = ({ header, url, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(url);
      console.log("rs", response);
      setMovies(response.data.results);
      //   return response;
    };
    fetchData();
  }, [url]);
  return (
    <div className="row">
      <h2>{header}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => {
          return (
            <img
              className={`row-poster ${isLarge && "row-poster-large"}`}
              key={index}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export { MovieRow };
