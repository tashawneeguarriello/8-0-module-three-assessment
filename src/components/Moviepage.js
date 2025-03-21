import React from "react";
import "../App.css";

class Moviepage extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      currentMovie: null,
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  handleDropdownChange = (event) => {
    this.setState({
      currentMovie: event.target.value,
    });
  };

  render() {
    let dropDownOptions = this.state.movies.map((movie) => {
      return <option value={movie.title}>{movie.title}</option>;
    });

    let currentMovieObject = this.state.movies.find((movie) => {
      return movie.title === this.state.currentMovie;
    });

    // let moviesToDisplay = this.state.movies.map((movie) => {
    //   return <option value={movie.title}>{movie.title}</option>;
    return (
      <div className="movie-details">
        <h1>Select A Movie</h1>
        <select onChange={this.handleDropdownChange}>
          <option>Select a Film</option>
          {dropDownOptions}
        </select>
        <h1>{currentMovieObject?.title}</h1>

        <p>{currentMovieObject?.release_date}</p>

        <p>{currentMovieObject?.description}</p>
      </div>
    );
  }
}
export default Moviepage;
