export default stations =>
    stations.map(({
                      name,
                      capacity,
                      num_docks_available,
                      num_bikes_available,
                      lat,
                      lon
                  }) => ({
        position: {
            lat,
            lng: lon
        },
        name,
        capacity,
        docksAvailable: num_docks_available,
        bikesAvailable: num_bikes_available,
    }));