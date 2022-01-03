 

import React from "react";
import GoogleMapReact from 'google-map-react';
import {POS_KEY} from '../constants' 

//https://github.com/google-map-react/google-map-react#readme
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
    const {lat,lon}=JSON.parse(localStorage.getItem(POS_KEY));
  const defaultProps = {
    center: {
      lat: lat,
      lng: lon,
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
