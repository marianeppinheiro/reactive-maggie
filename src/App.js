import React, { Component } from 'react';
import MenuTop from './MenuTop';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <MenuTop></MenuTop>
          <div>
          <Route exact path="/" component={Body}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Gallery" component={Gallery}/>
          </div>
        <Footer></Footer>
      </div>
      </HashRouter>
    );
  }
}

export default App;
