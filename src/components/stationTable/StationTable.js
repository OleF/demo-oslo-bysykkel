import React from 'react';
import MaterialTable from 'material-table';
import texts from '../../texts/texts_no';
import styles from './stationTable.module.css'
import useStationData from './useStationData';
import statusMessage from './statusMessage';

const StationTable = () => {
    const {stations, status} = useStationData();

    return (
        <div className={styles.tableContainer}>
            <MaterialTable
                columns={[
                    {title: texts.stationTable.name, field: 'name'},
                    {title: texts.stationTable.availableLocks, field: 'num_docks_available', type: 'numeric'},
                    {title: texts.stationTable.availableBikes, field: 'num_bikes_available', type: 'numeric'}
                ]}
                localization={{
                    body: {
                        emptyDataSourceMessage: statusMessage(status)
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
