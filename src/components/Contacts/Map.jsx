import React from 'react'
import {Map, GoogleApiWrapper} from "google-maps-react"

class Mapcontainer extends React.Component  {
    render(){
  return (
    <div>
        <Map
                google={this.props.google}
                style= {
                    {width: "47.5%", height: "88.5%", borderRadius: "0 20px 20px 0"}
                }
                zoom = {10}
                initialCenter = {{
                    lat: 6.484570,
                    lng: 3.575270
                }}
             />
    </div>
  )
}}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBwHVgurpWbu7yfmhIQjrvg6ZwGyGANZ4Q"
})(Mapcontainer)