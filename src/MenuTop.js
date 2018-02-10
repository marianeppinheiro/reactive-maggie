import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {
    NavLink,
  } from "react-router-dom";

export default class MenuTop extends Component {
    render() {  
      return (
        <Menu stackable>
        <Menu.Item>
            <NavLink to='/'>MAGDALENA RUSANOVA</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/AboutMe">AboutMe</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/Gallery">Gallery</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/Contact">Keep in touch</NavLink>
        </Menu.Item>
        </Menu>
      );
    }
}