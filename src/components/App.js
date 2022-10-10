import './App.css';
import React, { Component } from "react";
import map from '../assets/Map.jpg'
import GeoLocation from './GeoLocation.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        <GeoLocation/>
        <img src={map} alt="map" />
      </div>
    )
  }
}


export default App;
