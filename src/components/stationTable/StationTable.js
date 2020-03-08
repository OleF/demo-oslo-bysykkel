import React from 'react';
import texts from '../../texts/texts_no';
import styles from './stationTable.module.css'
import useStationData from './useStationData';
import MaterialTable from 'material-table';
import statusMelding from './statusMelding';

const StationTable = () => {
    // const StationInformationResponse = await fetch('http://www.mocky.io/v2/5e6397983600007500e8dd4a');

    const {stations, status} = useStationData();
    return (
        <div className={styles.tableContainer}>
            <MaterialTable
                columns={[
                    {title: texts.stationTable.name, field: 'name'},
                    {title: texts.stationTable.availableLocks, field: "num_docks_available", type: "numeric"},
                    {title: texts.stationTable.availableBikes, field: "num_bikes_available", type: "numeric"}
                ]}
                localization={{
                    body: {
                        emptyDataSourceMessage: statusMelding(status)
                    }
                }}
                data={stations}
                isLoading={status === 'LOADING'}
                title={texts.stationTable.title}
            />
        </div>
    );
};

export default StationTable;
