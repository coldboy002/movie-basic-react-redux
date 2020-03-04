import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMovies } from "../actions/moviesActions";

const Search = ({ fetchMovies }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      fetchMovies(text);
    }
    return () => {
      isMount = false;
    };
  }, [fetchMovies, text]);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie ..."
        className="search-box"
        value={text}
        onChange={handleChange}
      />
    </section>
  );
};

Search.propTypes = {};

export default connect(null, { fetchMovies })(Search);
