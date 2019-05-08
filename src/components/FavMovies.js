import React, { Component } from "react";
import { fetchMovies } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Label,
  Grid,
  Container,
  Card,
  Image,
} from "semantic-ui-react";
import FavoriteButton from "./FavoriteButton";

class MovieList extends Component {
  
  renderMovies() {
    const { favMoviez } = this.props;
    if (favMoviez.length<=0) {
      return <><div style={{marginTop:30,display:'block',textAlign: 'center',fontSize:40, color:'#f3a680'}}>Favorite list is empty</div></>;
    }
    return favMoviez.map(movie => {
      return (
        <Grid.Column key={movie.id}>
          <Card color="black" as='a'>
            <Label>
              <FavoriteButton {...movie} />
            </Label>
            <Image
              style={{ minHeight: 305 }}
              as={Link}
              to={`/movie/${movie.id}`}
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
  }

  render() {
    return (<div >
      <Container >
        <Grid doubling columns={5}>
          {this.renderMovies()}
        </Grid>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { favMoviez: state.persistedStore.favoriteMovies };
};
export default connect(
  mapStateToProps,
  { fetchMovies }
  
)(MovieList);
