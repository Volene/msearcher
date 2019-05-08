import React, { Component} from "react";
import logo from "../pictures/logo.png";
import { NavLink,Link } from "react-router-dom";
import { Menu,Icon,Container} from "semantic-ui-react";
import {withRouter} from 'react-router-dom'

import SearchBar from "./SearchBar";
class Menus extends Component {
  componentWillReceiveProps(nextProps) {
    
    if (nextProps.location.pathname !== this.props.location.pathname) {
    
    }
  }

  render() {
    return (
      <Container>
        <Menu style={{marginBottom:35}} borderless color="blue" inverted  >
          <Menu.Item as={Link} to={'/'} >
            <img src={logo} alt="logo" />
          </Menu.Item>

          <Menu.Item as={NavLink} to="/favMovies">
          <Icon name='heart' />
          Favorite Movies
          </Menu.Item>

          <Menu.Item position="right" style={{minWidth:170}} >
            <SearchBar />
          </Menu.Item>
        </Menu></Container>
        
        
    );
  }
}

export default withRouter(Menus);
