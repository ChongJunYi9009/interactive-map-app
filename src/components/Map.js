import mapImg from '../assets/Map.jpg'
import markerImg from '../assets/Marker.png'

function Map(props) {
    const topLeft = [process.env.REACT_APP_TL_Y, process.env.REACT_APP_TL_X]  //Lat, Long
    const btmRight = [process.env.REACT_APP_BR_Y, process.env.REACT_APP_BR_X]
    const vertical = (topLeft[0] - props.lat) / (topLeft[0] - btmRight[0])  
    const horizontal = (props.long - topLeft[1]) / (btmRight[1] - topLeft[1])  
    const top = vertical.toString() + "%"
    const left = horizontal.toString() + "%"

    return (
        <div style={{position: "relative", left: 0, top: 0}}>
            <img src={mapImg} alt="map" style={{maxWidth: "100%"}}/>
            {
                props.long > 0.1 &&  props.lat > 0.1 &&
                <img src={markerImg} alt="marker" style={{position: "absolute", maxWidth: "5%", left: left, top: top}}/>        
            }
        </div>
    );
}

export default Map;
