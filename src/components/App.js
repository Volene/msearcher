import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from '../history'
import Header from "./Header";
import MovieList from "./MovieList";
import MoviePage from "./MoviePage";
import FavMovies from "./FavMovies";


const App = () => {
  return (
    <Router history={history}>
      <Header/>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" exact component={MoviePage} />
        <Route path="/favmovies" exact component={FavMovies} />
        <Route path="/:page" exact component={MovieList} />
      </Switch>
    </Router>
  );
};

export default App;
