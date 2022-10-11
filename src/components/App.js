import './App.css';
import React, { Component } from "react";
//Components
import GeoLocation from './GeoLocation.js'
import Map from './Map.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0.0,
      longitude: 0.0,
      altitude: 0.0
    };
  }

  componentDidMount() {
    
  }

  updateGeolocation = (long, lat, alt)=>{
    this.setState({
      latitude: long,
      longitude: lat,
      altitude: alt
    });
  }

  render() {
    return (
      <div >
        <h4>Digipen Career Fair 2022</h4>
        <GeoLocation geoCallback={this.updateGeolocation}/>
        <Map long={this.state.longitude} lat={this.state.latitude}/>
      </div>
    )
  }
}


export default App;
