import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
  render() {
    return (
      <div class="text">
        <section id="home" >
        <div class="bg-text">
          <h1>Home</h1>
          <p>Lets Elect</p>
        </div>
        </section>
        
        <section id="about" >
          <h1>About</h1>
        </section>
      </div>
    );
  }
}

export default Home;
