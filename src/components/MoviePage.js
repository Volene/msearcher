import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieId } from "../actions";
import { Container, Loader, Grid } from "semantic-ui-react";

class MoviePage extends Component {
  componentDidMount() {
    this.props.getMovieId(this.props.match.params.id);
  }
  render() {
    const { movie } = this.props;
    if (!this.props) {
      return (
        <>
          <Loader />
        </>
      );
    } else
      return (
        <Container style={{ backgroundColor: "rgba(52, 52, 52, 0.8)" }}>
          <Grid doubling columns={2}>
            <Grid.Column width={8} style={{ marginTop: 5,textAlign: 'center' }}>
              <img
                src={movie.poster_path?`https://image.tmdb.org/t/p/w400${movie.poster_path}`:movie.poster_path}
                alt="poster"
              />
            </Grid.Column>
            <Grid.Column width={8} style={{textAlign:'center',color:'rgba(231, 205, 255, 0.87)'}} >
              <h1>{movie.original_title}</h1>
              <div style={{marginTop:70,fontSize:20,textAlign:'left'}}>{movie.overview}</div>
            </Grid.Column>
          </Grid>
        </Container>
      );
  }
}
const mapStateToProps = state => {
  return { movie: state.movies };
};
export default connect(
  mapStateToProps,
  { getMovieId }
)(MoviePage);
