import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import MovieList from "./MovieList";
import MoviePage from "./MoviePage";
import FavMovies from "./FavMovies";
// import MovieListF from "./movie-list";

const App = () => {
  return (
    <Router history={history}>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg)`,
          backgroundPosition: "center",
          display: "block",
          minHeight: "100vh",
          border: 3,
          boxSizing: "border-box"
        }}
      >
        <Header />
        <Switch>
          <Route
            path={["/", "/nowplaying/:page", "/q=:term"]}
            exact
            component={MovieList}
          />
          <Route path="/movie/:id" exact component={MoviePage} />
          <Route path="/favmovies" exact component={FavMovies} />
          <Route path="/nowplaying/:page" exact component={MovieList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
