import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import me from './img/me.jpg';

export default class Body extends Component {
    render() {  
      return (
      <div className='container'>
         <h2>
             Biography
         </h2>
         <p>
             Hi! I am Magdalena Rusanova. I am a awesome person that loves to draw and sing. I live in the Netherlands.................
        </p>
        <div>
        <Image src={me}></Image>
        <br/>
        </div>        
    </div>
      );
    }
}