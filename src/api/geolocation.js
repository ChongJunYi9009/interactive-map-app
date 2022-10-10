//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

export function GPS_CheckActive(){
    if ("geolocation" in navigator) {
        console.log("Geolocation: Available");
        return true;
      } else {
        console.log("Geolocation: Not Available");
      }
      return false;
}

export function GPS_WatchCurrPosition(successCallback){
    function failure(error){
        console.warn(error.message);
    }
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,      //5s
        maximumAge: 10000   //10s
      };

    navigator.geolocation.watchPosition(successCallback, failure, options);
}
