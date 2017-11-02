import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    onClick={props.handleMapClick.bind(this)}
    options={{
      mapTypeControl: false,
      panControl: false,
      streetViewControl: false,
      gestureHandling: 'cooperative',
      zoomControl: true,
      scrollwheel: false,
      draggable: true
    }}
    defaultZoom={14}
    defaultCenter={{ lat: 47.609343, lng: -122.334851 }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
))

export default MapComponent;
