//https://react-google-maps-api-docs.netlify.app/
import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 40.776676,
    lng: -73.971321
};

class NewMapSimple extends Component {
  render() {
    console.log("process.env:",process.env);
      const key=`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      console.log("process.env.google:",process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
      console.log("key:",key);
    return (
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default NewMapSimple;