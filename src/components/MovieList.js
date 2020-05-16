import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Container, Row } from "reactstrap";

export default function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then(response => {
        setFilms(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {films.map(film => {
          return <MovieCard film={film} key={film.id} />;
        })}
      </Row>
    </Container>
  );
}
