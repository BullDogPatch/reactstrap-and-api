import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const MovieCard = ({ film }) => {
  // const film = props.film;
  // const { film } = props;
  // console.log("film", film);
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardBody>
          <CardTitle>{film.title}</CardTitle>
          <CardText>{film.description}</CardText>
          <CardText>{film.director}</CardText>
          <CardText>{film.release_date}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MovieCard;
