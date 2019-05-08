import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input } from "semantic-ui-react";
import { requestSearch } from "../actions";
class SearchBar extends Component {
  state = { term: "", isError:'' };
  
  handleInputChange = (e, { value }) => {
    const re = /[^A-Za-z0-9\s]/g;
    const editedTerm = value
      .replace(re, "")
      .trim()
      .toLowerCase();
    editedTerm.length < 3
      ? this.setState({ term: "" })
      : this.setState({ term: editedTerm });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.term) {
      this.props.requestSearch(this.state.term);
    }
    if (this.state.term.length>2){
    this.props.history.push(`/q=${this.state.term}`)};
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input className= {this.state.isError}
          placeholder="Search Movies..."
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { requestSearch }
  )(SearchBar)
);
