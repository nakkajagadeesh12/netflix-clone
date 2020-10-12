import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./banner.css";

function Banner({ url }) {
  const [movie, setMovie] = useState({});

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(url);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More Info</button>
        </div>
        <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade"/>
    </header>
  );
}

export { Banner };
