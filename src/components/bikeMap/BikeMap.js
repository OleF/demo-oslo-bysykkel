import React from 'react'
import {Map, TileLayer} from 'react-leaflet';
import useStationData from '../common/hooks/useStationData';
import BikeStands from '../bikeStands/BikeStands';

const BikeMap = () => {
    const {stations} = useStationData();

    // Map is set default of first station, should use browser api ot get position.
    const position = stations[0] ? {lat: stations[0].lat, lng: stations[0].lon} : {lat: 0, lng: 0};

    return (
        <Map center={position} zoom={18} style={{height: '93vh'}}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <BikeStands stations={stations}/>
        </Map>
    )

};

export default BikeMap;