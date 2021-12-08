import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { GeolocateControl } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
mapboxgl.accessToken = 'pk.eyJ1IjoiY3J5c3RlcmFuIiwiYSI6ImNrd214Z3I5ODJnNXYydnFiZjhwYTM3N2wifQ.O596P0tREhKLBRHjDvfP2Q';
const styles = {
    mapStyle: {
        textAlign: 'left',
        height: '50vh',
        width: '50vw',
        margin: 'auto'
    },
};

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 121.476140,
            lat: 38.556270,
            zoom: 9
        }
    }
    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [lng, lat],
            zoom: zoom
        });
        const marker1 = new mapboxgl.Marker()
            .setLngLat([121.476140, 38.556270])
            .addTo(map);

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        })
        map.addControl(directions, 'top-left')
        directions.setDestination('2500, Franklin Blvd, Unit A, Sacramento')
        // Initialize the geolocate control.
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
        // Add the control to the map.
        map.addControl(geolocate);
        map.on('load', () => {
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
            navigator.geolocation.getCurrentPosition((position) => {
                let userLatitude = position.coords.latitude
                let userLongitude = position.coords.longitude
                directions.setOrigin([userLongitude, userLatitude]);
            });
        })
        map.on('move', () => {
            const { lng, lat } = map.getCenter();
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;

        return (
            <div>
                <div style={styles.mapStyle} ref={el => this.mapContainer = el} className="absolute top right left bottom" />
            </div>
        );
    }
}

export default Map;