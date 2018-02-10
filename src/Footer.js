import React, { Component } from 'react'

export default class Footer extends Component {
    render() {  
      return (
      <div className='container' style={{paddingTop:'10px', positio:'fixed', bottom:'0px' }}>
        <a href="https://www.facebook.com/maggiedraws" rel="noopener noreferrer" target="_blank" style={{padding:'10px'}}><i className="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/maggiedrawss/"  rel="noopener noreferrer" target="_blank" style={{padding:'10px'}}><i className="fa fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/magdalena-rusanova-b2464027/"  rel="noopener noreferrer" target="_blank" style={{padding:'10px'}}><i className="fa fa-linkedin"></i></a>
      </div>
      );
    }
}