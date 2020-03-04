import React from "react";
import { connect } from "react-redux";

import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Popup from "./components/Popup";
import { closePopup } from "./actions/popupAction";

const App = ({ show, selected, closePopup }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies database</h1>
        <main>
          <Search />
          {show ? (
            <Popup selected={selected} closePopup={closePopup}/>
          ) : (
            <MovieList  />
          )}
        </main>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  show: state.popup.show,
  selected: state.popup.selected
});

export default connect(mapStateToProps, { closePopup })(App);
