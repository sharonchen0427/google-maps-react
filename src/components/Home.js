import React, { Component } from 'react'
// import AroundMap from './AroundMap'
import OldMap from './OldMap'
import { POS_KEY, TOKEN_KEY } from '../constants'
import NewMap from './NewMap'
import NewMapSimple from './NewMapSimple'

export default class Home extends Component {
    state = {
        isLoadingGeoLocation: false,
        isLoadingPosts: false,
        error: '',
        posts: [],
    }

    // When the component is rendered to the DOM for the first time
    // such as at page load we call the Geolocation API to determine
    // a latitude and longitude for the browser
    componentDidMount() {
        console.log(navigator.geolocation);
        if ("geolocation" in navigator) {
            this.setState({ isLoadingGeoLocation: true, error: '' });
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailedLoadGeoLocation,
                // GEO_OPTIONS,
            );
        } else {
            this.setState({ error: 'Geolocation is not supported.' });
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify({ lat: latitude, lon: longitude }));
        this.setState({ isLoadingGeoLocation: false, error: '' });
        //  this.loadNearbyPosts();
    }
    //todo
    //     loadNearbyPosts = (center, radius) => {
    //         const { lat, lon } = center ? center : JSON.parse(localStorage.getItem(POS_KEY));
    //         const range = radius ? radius : 20;
    //         const token = localStorage.getItem(TOKEN_KEY);
    //         this.setState({ isLoadingPosts: true, error: '' });
    //         return fetch(`/search?lat=${lat}&lon=${lon}&range=${range}`, {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             throw new Error('Failed to load posts.');
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({ posts: data ? data : [], isLoadingPosts: false });
    //         })
    //         .catch((e) => {
    //             console.error(e);
    //             this.setState({ isLoadingPosts: false, error: e.message });
    //         });
    //  }


    onFailedLoadGeoLocation = () => {
        this.setState({ isLoadingGeoLocation: false, error: 'Failed to load geo location.' });
    }

    render() {
        return (
            <div>
                home page...
                {/* <AroundMap /> */}

                {/* <OldMap 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `80%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `80%` }} />}
                posts={this.state.posts}  //pass data down to map, then to mark
                /> */}
                {/* <h2>NewMap</h2> */}
                {/* <NewMap /> */}
                <h2>NewMapSimple</h2>
                <NewMapSimple />
            </div>
        )
    }

}
