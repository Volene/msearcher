import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";

class SearchBar extends Component {
  render() {
    return (
      <div className="ui input">
        <DebounceInput
          placeholder='Find Movies...'
          minLength={3}
          debounceTimeout={55}
          />
        </div>
        )
  };
}
export default SearchBar;
