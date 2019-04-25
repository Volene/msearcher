import React, { Component } from "react";
import { connect } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../actions/";
class FavoriteButton extends Component {
  renderIsFavorite() {
    if (!this.props) {
      return <div>spinner</div>;
    }
    const { id } = this.props;
    const { favMoviez } = this.props;
    if (!favMoviez.find(movie => movie.id === id)) {
      return (
        <button onClick={() => this.props.addToFavorite(this.props)}>
          ADD
        </button>
      );
    }
    return (
      <button onClick={() => this.props.removeFromFavorite(this.props.id)}>
        DELETE
      </button>
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
