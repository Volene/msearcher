import React, { Component } from "react";
import { connect } from "react-redux";
import {getMovieId } from "../actions";
import { Container } from "semantic-ui-react";

class MoviePage extends Component {
  componentDidMount() {
    this.props.getMovieId(this.props.match.params.id)
  }
  render() {
    // console.log(this.props.match.params.id);
    const { movie } = this.props;
    if (!this.props) {
      return <div>spinner</div>;
    } else
      return (
        <>
          <Container >
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt="poster"
            />
          </Container>
        </>
      );
  }
}
const mapStateToProps = state => {
  return { movie: state.movies };
};
export default connect(
  mapStateToProps,
  {getMovieId }
)(MoviePage);
