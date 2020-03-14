import React from 'react';
import {render} from '@testing-library/react';
import useStationData from '../../common/hooks/useStationData';
import text from '../../../texts/texts_no';
import StationTable from "../StationTable";

jest.mock('../../common/hooks/useStationData');

describe('- <StationTable />', () => {
    it('- Should render loading when loading data', () => {
        useStationData.mockReturnValue({
            stations: [],
            status: 'LOADING'
        });

        const {getByText} = render(<StationTable/>);

        const statusMessage = getByText(text.stationTable.status.loading);

        expect(statusMessage).toBeTruthy()
    });

    it('- Should render error if status ERROR', () => {
        useStationData.mockReturnValue({
            stations: [],
            status: 'ERROR'
        });

        const {getByText} = render(<StationTable/>);

        const statusMessage = getByText(text.stationTable.status.error);

        expect(statusMessage).toBeTruthy()
    });

    it('- Should render status message to user if the list is empty', () => {
        useStationData.mockReturnValue({
            stations: [],
            status: 'DATA_COLLECTED'
        });

        const {getByText} = render(<StationTable/>);

        const statusMessage = getByText(text.stationTable.status.dataCollected);

        expect(statusMessage).toBeTruthy()
    });

    it('- Should render table data', () => {
        useStationData.mockReturnValue({
            stations: [
                {
                    name: 'Aker Brygge',
                    capacity: 33,
                    num_docks_available: 33,
                    num_bikes_available: 0,
                    lat: 59.91118372188379,
                    lon: 10.730034556850455
                },
                {
                    name: 'Ole Brygge',
                    capacity: 42,
                    num_docks_available: 3,
                    num_bikes_available: 6,
                    lat: 59.91118372188379,
                    lon: 10.730034556850455
                }
            ],
            status: 'DATA_COLLECTED'
        });

        const {getByText} = render(<StationTable/>);

        const akerBryggeRow = getByText('Aker Brygge');
        const oleRow = getByText('Ole Brygge');

        expect(akerBryggeRow).toBeTruthy()
        expect(oleRow).toBeTruthy()
    });
});