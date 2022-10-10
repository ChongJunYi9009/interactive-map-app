import './App.css';
import React, { Component } from "react";
import {GPS_CheckActive, GPS_WatchCurrPosition} from '../api/geolocation.js'
import map from '../assets/Map.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    //Once after first render
    if(!GPS_CheckActive()){
      GPS_WatchCurrPosition()
    }
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        <img src={map} alt="map" />
        {/*<Demo/>*/}
      </div>
    );
  }
}


export default App;
