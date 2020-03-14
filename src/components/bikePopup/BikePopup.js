import React from 'react';
import PropTypes from 'prop-types';
import {bikePopup} from '../../texts/texts_no';
import style from './bikePopup.module.css'
import {Popup} from 'react-leaflet';

const BikePopup = ({name, bikesAvailable, docksAvailable, capacity}) => (
    <Popup className={style.popup}>
        <h2>{name}</h2>
        <p>{`${bikePopup.bikes}: ${bikesAvailable}`}</p>
        <p>{`${bikePopup.locks}: ${docksAvailable}`}</p>
        <p>{`${bikePopup.capacity}: ${capacity}`}</p>
    </Popup>
);

BikePopup.propTypes = {
    bikesAvailable: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    docksAvailable: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default BikePopup;
