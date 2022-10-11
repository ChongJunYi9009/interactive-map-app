import React, { Component } from "react";
import {GPS_CheckActive, GPS_WatchCurrPosition} from '../api/geolocation.js'
//https://react-popup.elazizi.com/component-api/
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//Asset
import turnOnLocal from '../assets/TurnOnLocation.jpg'

class GeoLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            enabled: true,
            latitude: 0.0,
            longitude: 0.0,
            altitude: 0.0
        };
        this.Geolocation_Callback = this.Geolocation_Callback.bind(this);
    }

     //Once after first render
    componentDidMount(){
        setTimeout(function() { //Start the timer for 0.5 sec
        if(GPS_CheckActive()){
                GPS_WatchCurrPosition(this.Geolocation_Callback);
            this.setState({enabled: true});
            }else{
                this.setState({enabled: false});
        }
        }.bind(this), 500)
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
              {
                !this.state.enabled && <h5 style={{color:"red"}}>GPS not enabled!</h5>
              }
              <Popup open={!this.state.enabled} disabled={this.state.enabled} onClose={()=> window.location.reload()} modal>
                <h1> Please enable location and try again! </h1>
                <img src={turnOnLocal} style={{width: "95%", height: "auto", margin: "auto", border: "5px solid #555"}} alt="enableLoc"/>
              </Popup>
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
