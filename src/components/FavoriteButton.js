import React, { Component } from "react";
import { connect } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../actions/";
import { Icon, Popup } from "semantic-ui-react";
class FavoriteButton extends Component {
  
  renderIsFavorite() {
  
    if (!this.props) {
      return null;
    }
    const { id } = this.props;
    const { favMoviez } = this.props;
    if (!favMoviez.some(movie => movie.id === id)) {
      return (
        <Popup
          trigger={
            <Icon
              color='black'
              name="heart"
              size="large"
              inverted
              
              onClick={() => this.props.addToFavorite(this.props)}
            />
          }
          content="Add movie to favorite"
        />
      );
    }
    return (
      <Icon
        color="red"
        name="heart"
        size="large"
        inverted
        onClick={() => this.props.removeFromFavorite(this.props.id)}
      />
    );
  }

  render() {
    return <>{this.renderIsFavorite()}</>;
  }
}
const mapStateToProps = state => {
  return { favMoviez: state.persistedStore.favoriteMovies };
};
export default connect(
  mapStateToProps,
  { addToFavorite, removeFromFavorite }
)(FavoriteButton);
