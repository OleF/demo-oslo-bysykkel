import {useEffect, useState} from 'react';
import config from '../../config.json';
import fetchData from "../../util/data/fetchUtil";

const useStationData = () => {
    const [stations, setStations] = useState([]);
    const [status, setStatus] = useState('LOADING');
    const updateStations = (stations, statuses) => {
        const mapedStations = stations.map(({name, capacity, station_id}) => {
            const {
                num_docks_available,
                num_bikes_available
            } = statuses.find(status => station_id === status.station_id);
            return {
                name,
                capacity,
                num_docks_available,
                num_bikes_available
            };
        });
        setStations(mapedStations);
    };

    useEffect(() => {
        const {
            host,
            endpoints: {
                stationInformation,
                stationStatus
            }
        } = config.oslobysykkel;

        const fetchStationData = async () => {
            const stations = await fetchData(host + stationInformation);
            const status = await fetchData(host + stationStatus);

            if (stations === 'error' || status === 'error')
                setStatus('ERROR');
            else
                updateStations(stations.data.stations, status.data.stations);
        };

        fetchStationData()
            .then(() => setStatus('DATA_COLLECTED'))
            .catch(() => setStatus('ERROR'));

    }, []);

    return {stations, status};
};

export default useStationData;
