import React, { Component } from 'react'
import { Marker, InfoWindow } from "react-google-maps"

export default class AroundMarker extends Component {
    state = {
        isOpen: false,

    }
    render() {
        const {isOpen}=this.state
        console.log(this.props.post)
        // const {url,user,message,location}=this.props.post
        // const{lat, lon}=location
        return (

            <Marker /*position={{ lat: lat, lng: lon }} */
                onClick={this.handleToggle} >
                {
                    isOpen?(<InfoWindow >
                        <div>
                            {/* <img src={url} alt={message}/>
                            <p>`${user}:{message}`</p> */}
                        </div>
                    </InfoWindow>):null
                }
            </Marker>
        )
    }
    handleToggle = () => {
        // this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true })
        this.setState(preState=>({
            isOpen: !preState.isOpen
        }))
    }
}
