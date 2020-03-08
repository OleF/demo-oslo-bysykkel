import React, {useEffect, useState} from "react";
import fetchData from "../../util/data/fetchUtil";
import StationTable from "../stationTable/StationTable";

const MainContainer = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetchData('http://www.mocky.io/v2/5e6397983600007500e8dd4a').then(response => {
    //         setData(response);
    //     })
    // }, []);

    return <div>
        <StationTable/>
    </div>;
};


export default MainContainer;