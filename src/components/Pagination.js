import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import { Pagination } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class Pagination2 extends Component {
  state = { activePage: 1 };

  handlePaginationChange = (e, { activePage }) => {
    this.props.history.push(`/nowplaying/${activePage}`);
    this.props.fetchMovies(activePage);
    this.setState({ activePage });
    window.scrollTo(0, 0);
  };

  renderPagination() {
    const { total_pages } = this.props.movies;
    if (total_pages > 1) {
      return (
        <Pagination
          inverted
          style={{ backgroundColor: "rgba(169, 169, 166, 0.45)", marginTop: 5 }}
          onPageChange={this.handlePaginationChange}
          defaultActivePage={this.props.match.params.page || 1}
          boundaryRange={0}
          ellipsisItem={null}
          firstItem={1}
          lastItem={total_pages}
          siblingRange={1}
          totalPages={total_pages}
        />
      );
    }
  }
  render() {
    return <>{this.renderPagination()}</>;
  }
}
const mapStateToProps = state => {
  return { movies: state.movies };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchMovies }
  )(Pagination2)
);
