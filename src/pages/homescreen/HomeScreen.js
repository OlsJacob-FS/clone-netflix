import React from "react";
//Import Css:
import "./HomeScreen.css";
//Import Components:
import Nav from "../../components/navbar/Nav";
import Banner from "../../components/banner/Banner";
import requests from "../../axios/Requests";
import Row from "../../components/row/Row";
export default function HomeScreen() {
  return (
    <div className="app">
      {/* nav bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Body Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
