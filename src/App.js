import React from "react";
import MovieList from "./components/MovieList";
import logo from "./assets/logo.png";
import "./styles.css";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="studio ghibli official logo" />
        <h1>API</h1>
        <Button color="warning">Hello!</Button>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
