import React, { Component } from "react";
import { fetchMovies, requestSearch } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Container, Card, Image, Label, Loader } from "semantic-ui-react";
import Pagination from "./Pagination";
import FavoriteButton from "./FavoriteButton";
import { withRouter } from "react-router-dom";

class MovieList extends Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    pathname.match("q=")
      ? this.props.requestSearch(pathname.substr(pathname.lastIndexOf("=") + 1))
      : this.props.fetchMovies(this.takeLocation(pathname));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname 
      && !nextProps.location.pathname.match('q')) {
      this.props.fetchMovies(this.takeLocation(nextProps.location.pathname));
    }
  }

  takeLocation = x => {
    const locw = x.substr(x.lastIndexOf("/") + 1);
    return locw;
  };
  renderCard = () => {
    const { results } = this.props.movies;

    if (!results) {
      return <div />;
    }
    return results.map(movie => {
      return (
        <Grid.Column key={movie.id}>
          <Card color="black" as="a" to={`/movie/${movie.id}`}>
            <Label>
              <FavoriteButton {...movie} />
            </Label>
            <Image
              as={Link}
              to={`/movie/${movie.id}`}
              style={{ minHeight: 305 }}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : "https://react.semantic-ui.com/images/wireframe/image.png"
              }
            />
            <Label
              attached="bottom"
              to={`/movie/${movie.id}`}
              style={{ textAlign: "center" }}
            >
              {movie.title}{" "}
            </Label>
          </Card>
        </Grid.Column>
      );
    });
  };
  renderMovies() {
    if (!this.props.movies.isFetched) {
      return (
        <Container
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            minHeight: 700,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Loader size="massive" inverted active inline="centered" />
        </Container>
      );
    } else {
      return (
        <Container
          style={{ margin: 25, backgroundColor: "rgba(52, 52, 52, 0.8)" }}
        >
          <Grid doubling columns={5}>
            {this.renderCard()}
          </Grid>
          <div style={{ textAlign: "center", boxSizing: "border-box" }}>
            <Pagination />
          </div>
        </Container>
      );
    }
  }

  render() {
    return <>{this.renderMovies()}</>;
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchMovies, requestSearch }
  )(MovieList)
);
