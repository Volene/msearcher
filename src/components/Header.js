import React, { Component } from "react";
import logo from "../pictures/logo.png";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import SearchBar from "./SearchBar";
class Menus extends Component {
  render() {
    return (
      <>
        <Menu borderless color="olive" inverted>
          <Menu.Item as={Link} to="/">
            <img src={logo} alt="logo" />
          </Menu.Item>

          <Menu.Item as={Link} to="/favMovies">
            <h3>Favorite Movies ★</h3>
          </Menu.Item>

          <Menu.Item position="right">
            <SearchBar />
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Menus;
