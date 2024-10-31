import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import "./MovieDataScreen.css";

export default function MovieDataScreen() {
  const { state } = useLocation();
  const { title, image, releaseDate, overview } = state;
  console.log(title);
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movieScreenData">
      <Nav />
      <div className="movieScreenCard">
        <img src={`${base_url}${image}`} alt="" />
        <h1>Title: {title}</h1>
        <h3>Release Date: {releaseDate}</h3>
        <p>
          <span className="movieScreenSpan">Overview</span>: {overview}
        </p>
      </div>
    </div>
  );
}
