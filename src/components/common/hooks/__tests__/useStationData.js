import useStationData from '../useStationData';
import mockData from './mockServerData';
import config from '../../../../config';
import {renderHook} from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';

describe('- useStationData', () => {
    const {
        oslobysykkel: {
            host,
            endpoints: {
                stationStatus,
                stationInformation
            }
        }
    } = config;

    beforeEach(() => {
        global.fetch = fetch;
    });
    afterEach(() => {
        fetchMock.restore();
    });

    it('- should return and map data with a successful request', async () => {
        fetchMock.mock(`${host}${stationStatus}`, mockData.stationStatus);
        fetchMock.mock(`${host}${stationInformation}`, mockData.stationInformation);

        const {result, waitForNextUpdate} = renderHook(() => useStationData());


        await waitForNextUpdate();

        expect(result.current.status).toBe('DATA_COLLECTED');
        expect(result.current.stations).toMatchObject([{
            capacity: 33,
            lat: 59.91118372188379,
            lon: 10.730034556850455,
            name: 'Aker Brygge',
            num_bikes_available: 0,
            num_docks_available: 33
        }]);
    });

    it('- should return error if one of the endpoints are down', async () => {
        fetchMock.mock(`${host}${stationStatus}`, 500);
        fetchMock.mock(`${host}${stationInformation}`, mockData.stationInformation);

        const {result, waitForNextUpdate} = renderHook(() => useStationData());

        await waitForNextUpdate();

        expect(result.current).toMatchObject({
            stations: [],
            status: 'ERROR'
        });
    });

    it('- should return error the endpoints return the wrong data', async () => {
        fetchMock.mock(`${host}${stationStatus}`, { data: 'wrong data'});
        fetchMock.mock(`${host}${stationInformation}`, mockData.stationInformation);

        const {result, waitForNextUpdate} = renderHook(() => useStationData());

        await waitForNextUpdate();

        expect(result.current).toMatchObject({
            stations: [],
            status: 'ERROR'
        });
    });

    it('- should return loading when fetching data', async () => {
        fetchMock.mock(`${host}${stationStatus}`, mockData.stationStatus);
        fetchMock.mock(`${host}${stationInformation}`, mockData.stationInformation);

        const {result} = renderHook(() => useStationData());

        expect(result.current.status).toBe('LOADING');
    });
});