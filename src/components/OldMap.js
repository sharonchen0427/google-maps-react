//https://tomchentw.github.io/react-google-maps/


import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

import React, { Component } from 'react'
import { POS_KEY } from '../constants'
import AroundMarker from './AroundMarker'

import { Marker, InfoWindow } from "react-google-maps"

class NormalMap extends Component {
    render() {
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <div>
                <GoogleMap ref={this.getMapRef}
                    defaultZoom={11}
                    defaultCenter={{ lat, lng: lon }}
                    onDragEnd={this.reloadMarker}
                    onZoomChanged={this.reloadMarker}
 
                >
                    {
                        /* {this.props.isMarkerShown && <AroundMarker position={{ lat: 40.6697, lng: -73.1302 }} onClick={this.props.onMarkerClick} />} */
                        //iterate posts
                        this.props.posts.map(post => <AroundMarker post={post} key={post.url} />)
                    }
                </GoogleMap>
                <AroundMarker />
            </div>
        )
    }

    getMapRef = (mapInstance) => {
        this.map = mapInstance;
        window.map = mapInstance; //put it under window, accessed everywhere
    }

    reloadMarker = () => {
        const center = this.getCenter();
        const radius = this.getRadius();
        //as params to the loadNearbyPosts()
        //this.props.loadNearbyPosts(center,radius)
    }

    getCenter = () => {
        const center = this.map.getCenter();
        return { lat: center.lat(), lon: center.lng() };
    }
    getRadius = () => {
        const center = this.map.getCenter();
        const bounds = this.map.getBounds();
        console.log("bounds", bounds);
        if (center && bounds) {
            const ne = bounds.getNorthEast();
            const right = new window.google.maps.LatLng(center.lat(), ne.lng());
            return 0.01 * window.google.maps.geometry.spherical.computeDistanceBetween(center, right);
        }
        //getNorthEast: ƒ ()
        //getSouthWest: ƒ ()
        return;
    }

}

const OldMap = withScriptjs(withGoogleMap(NormalMap));
export default OldMap;