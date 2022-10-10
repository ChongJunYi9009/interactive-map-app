import React, { Component } from "react";
import {GPS_CheckActive, GPS_WatchCurrPosition} from '../api/geolocation.js'

class GeoLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            altitude: 0
        };
    }

     //Once after first render
    componentDidMount(){
        if(!GPS_CheckActive()){
            GPS_WatchCurrPosition(this.Geolocation_Callback)
        }
    }
 
    Geolocation_Callback(position){
        //console.log(position);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        console.log("Altitude is :", position.coords.altitude);
        this.setState({latitude: position.coords.latitude});
        this.setState({longitude: position.coords.longitude});
        this.setState({altitude: position.coords.altitude});
    }

    render(){
        return (
            <div>
              <p>
                Latitude: {this.state.latitude}&emsp; &emsp;
                Longitude: {this.state.longitude}&emsp; &emsp;
                Altitude: {this.state.altitude}
              </p>
            </div>
          );
    }
}

export default GeoLocation;
