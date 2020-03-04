import React from "react";
import PropTypes from "prop-types";


import notImg from "../no-img.png";

function hasImg(urlImage) {
  const regex = /https/;
  return regex.test(urlImage);
}

const Movie = ({ movie, openPopup }) => {
  return (
    <div className="movie" onClick={() => openPopup(movie)}>
      <img src={hasImg(movie.Poster) ? movie.Poster : notImg} alt="" />
      <h3>{movie.Title}</h3>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
