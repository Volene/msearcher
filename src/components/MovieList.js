import React, { Component } from "react";
import { fetchMovies } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Loader,
  Grid,
  Container,
  Card,
  Image,
  Pagination
} from "semantic-ui-react";
import FavoriteButton from "./FavoriteButton";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    const { results } = this.props.movies;
    if (!results) {
      return <Loader size="medium" />;
    }
    return results.map(movie => {
      return (
        <Grid.Column key={movie.id}>
          <FavoriteButton {...movie} />
          <button onClick={this.handleClick}>{movie.id}</button>
          <Card>
            <Image
              as={Link}
              to={`/movie/${movie.id}`}
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            />
            <Card.Content>
              <Card.Header>{movie.title}</Card.Header>
              <Card.Description>{movie.overview}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              Average rating: {movie.vote_average}
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <Container>
        <Pagination
          onClick={this.handleClick}
          defaultActivePage={1}
          totalPages={3}
        />
        <>{this.renderPagination}</>
        <Grid doubling columns={5}>
          {this.renderMovies()}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};
export default connect(
  mapStateToProps,
  { fetchMovies }
  //,fetchMovies
)(MovieList);
