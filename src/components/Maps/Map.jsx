"use client";
import React from 'react';
import mapboxgl from '!mapbox-gl';
import { useState, useEffect, useRef } from 'react';

function Map ({cityCoords}) {

     
mapboxgl.accessToken = 'pk.eyJ1IjoiZmwwMDMyNyIsImEiOiJja242ZWw4N2owZGVjMnFwNGgwNGc4N3E1In0.ArXcZDYAJK7pbPK2QVj5iQ';

const mapContainer = useRef(null);
const map = useRef(null);
const [zoom, setZoom] = useState(11);
const [centerCoords, setCenterCoords] = useState(cityCoords)

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centerCoords,
    zoom: zoom
});
}, []);

useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setCenterCoords([map.current.getCenter().lng.toFixed(4), map.current.getCenter().lat.toFixed(4)]);
    setZoom(map.current.getZoom().toFixed(2));
    });
    });

  return (
    <div>
        <div ref={mapContainer} className="mt-5 mb-5" style={{ height : '400px'}}/>
    </div>
  )
  
}

export default Map
