import React, { Component } from "react";
import {GPS_CheckActive, GPS_WatchCurrPosition} from '../api/geolocation.js'

class GeoLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            enabled: false,
            latitude: 0.0,
            longitude: 0.0,
            altitude: 0.0
        };
        this.Geolocation_Callback = this.Geolocation_Callback.bind(this);
    }

     //Once after first render
    componentDidMount(){
        if(GPS_CheckActive()){
            GPS_WatchCurrPosition(this.Geolocation_Callback)
            this.setState({enabled: true});
        }
    }
 
    Geolocation_Callback(position){
        //console.log(position);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        console.log("Altitude is :", position.coords.altitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude
        });
    }

    render(){
        return (
            <div>
              {!this.state.enabled && <h5 style={{color:"red"}}>GPS not enabled!</h5>}
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
