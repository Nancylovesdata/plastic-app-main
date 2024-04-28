// LocationMap.js

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class LocationMap extends Component {
  render() {
    return (
      <div className="w-full h-96">
        <Map
          google={this.props.google}
          zoom={14}
          containerStyle={{ width: '100%', height: '100%' }}
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
        >
          <Marker position={{ lat: this.props.latitude, lng: this.props.longitude }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY'
})(LocationMap);
