import React from 'react';
import PropTypes from 'prop-types';
import stationMapper from './stationMapper';
import BikeMarker from '../bikeMarker/BikeMarker';

const BikeStands = ({stations}) => {
    const bikeStands = stationMapper(stations);

    return (
        <>
            {
                bikeStands.map(({position, name, capacity, docksAvailable, bikesAvailable}) =>
                    <BikeMarker
                        key={`${name}${position.lng}`}
                        name={name}
                        position={position}
                        bikesAvailable={bikesAvailable}
                        docksAvailable={docksAvailable}
                        capacity={capacity}
                    />)
            }
        </>
    );
};

BikeStands.propTypes = {
    stations: PropTypes.array.isRequired
};

export default BikeStands;
