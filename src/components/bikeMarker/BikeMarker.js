import React from 'react';
import PropTypes from 'prop-types';
import {Marker} from 'react-leaflet';
import AvailableBikesIcon from '../bikeIcons/AvailableBikesIcon';
import BikePopup from '../bikePopup/BikePopup';
import UnAvailableBikesIcon from '../bikeIcons/UnAvailableBikesIcon';

const BikeMarker = ({position, name, bikesAvailable, docksAvailable, capacity}) => (
    <Marker position={position} icon={bikesAvailable ? AvailableBikesIcon : UnAvailableBikesIcon}>
        <BikePopup name={name} bikesAvailable={bikesAvailable} docksAvailable={docksAvailable} capacity={capacity}/>
    </Marker>
);

BikeMarker.propTypes = {
    bikesAvailable: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    docksAvailable: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }).isRequired
};

export default BikeMarker;