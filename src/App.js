import React, {useState} from 'react';
import Header from './components/header/Header';
import styles from './app.module.css';
import BikeMap from './components/bikeMap/BikeMap';
import StationTable from './components/stationTable/StationTable';

const App = () => {
    const [isMapActive, setIsMapActive] = useState(true);

    return (
        <div >
            <Header handleOnClick={() => setIsMapActive(!isMapActive)}/>
            <main className={styles.container}>
                {isMapActive ? <BikeMap/> : <StationTable/>}
            </main>
        </div>
    );
};

export default App;
