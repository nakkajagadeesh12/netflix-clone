import React from "react";
import "./App.css";
import { MovieRow } from "./moviesRow";
import { movieRequests } from "./movieRequests";
import { Banner } from "./banner";
import {Navigation} from './navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner url={movieRequests.fetchNetflixOriginals} />
      <MovieRow
        header="Netflix Originals"
        url={movieRequests.fetchNetflixOriginals}
        isLarge={true}
      />
      <MovieRow header="Trending Now" url={movieRequests.fetchTrending} />
      <MovieRow header="Top Rated" url={movieRequests.fetchTopRated} />
      <MovieRow header="Action Movies" url={movieRequests.fetchActionMovies} />
      <MovieRow header="Comedy Movies" url={movieRequests.fetchComedyMovies} />
      <MovieRow header="Horror Movies" url={movieRequests.fetchRomanceMovies} />
      <MovieRow header="Romance Movies" url={movieRequests.fetchComedyMovies} />
      <MovieRow
        header="Documentary Movies"
        url={movieRequests.fetchDocumentryMovies}
      />
    </div>
  );
}

export default App;
