import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {GOOGLE_MAPS_API_KEY} from '../constants'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 40.776676,
    lng: -73.971321
};
console.log("google map key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

const NewMap= React.memo(MyComponent)
export default NewMap