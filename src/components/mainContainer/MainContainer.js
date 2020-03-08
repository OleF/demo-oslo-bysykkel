import React from 'react';
import styles from './mainContainerStyle.module.css'
import StationTable from "../stationTable/StationTable";

const MainContainer = () => {
    return <main>
        <div className={styles.container}>
            <StationTable/>
        </div>
    </main>;
};


export default MainContainer;