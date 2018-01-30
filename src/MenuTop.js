import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuTop extends Component {
    render() {  
      return (
        <Menu stackable>
        <Menu.Item>
            MAGDALENA RUSANOVA
        </Menu.Item>
        <Menu.Item>
            About me
        </Menu.Item>
        <Menu.Item>
            Gallery
        </Menu.Item>
        <Menu.Item>
            Keep in Touch
        </Menu.Item>
        </Menu>
      );
    }
}