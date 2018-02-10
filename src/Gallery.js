import React, { Component } from "react";
import { Grid, Image } from 'semantic-ui-react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
 
class Gallery extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Gallery</h2>
        <p>hope you like it</p>
        <Grid columns={4} divided>
            <Grid.Row>
            <Grid.Column>
                <Image src={ img1 }/>
            </Grid.Column>
            <Grid.Column>
                <Image src={ img2 } />
            </Grid.Column>
            <Grid.Column>
                <Image src={ img3 } />
            </Grid.Column>
            <Grid.Column>
                <Image src={ img4 } />
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
                <Image src={ img5 } />
            </Grid.Column>
            <Grid.Column>
                <Image src={ img6 } />
            </Grid.Column>
            <Grid.Column>
                <Image src={ img7} />
            </Grid.Column>
            <Grid.Column>
                <Image src={ img8 } />
            </Grid.Column>
            </Grid.Row>
        </Grid>
     </div>
    );
  }
}
 
export default Gallery;