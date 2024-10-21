//Import Dependancies
import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
//Import CSS
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  //store movie data from tmdb
  const [movies, setMovies] = useState([]);
  //Image base url
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    //Fetch movie data from tmdb using axios and requests
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    //Call fetchData
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
