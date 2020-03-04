import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { openPopup } from "../actions/popupAction";

import Movie from "./Movie";

const MovieList = props => {
  const { error, loading, movies, openPopup } = props;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map(movie => (
          <Movie key={movie.imdbId} movie={movie} openPopup={openPopup} />
        ))
      ) : (
        <p>Not thing</p>
      )}
    </section>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
  //   error: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(mapStateToProps, { openPopup })(MovieList);
