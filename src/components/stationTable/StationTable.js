import React from "react";
import useStationData from "./useStationData";
import MaterialTable from "material-table";

const StationTable = () => {

    // const StationInformationResponse = await fetch('http://www.mocky.io/v2/5e6397983600007500e8dd4a');

    const {stations, status} = useStationData();

    // return (
    //     <table>
    //         <tr>
    //             <th>Navn</th>
    //             <th>Tilgjengelige låser</th>
    //             <th>Tilgjengelige sykler</th>
    //         </tr>
    //         {stations.map(({name, num_bikes_available, num_docks_available}) => {
    //             return (
    //                 <tr>
    //                     <td>{name}</td>
    //                     <td>{num_docks_available}</td>
    //                     <td>{num_bikes_available}</td>
    //                 </tr>
    //             );
    //         })}
    //     </table>
    // );
    return(
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                columns={[
                    { title: "Navn", field: "name" },
                    { title: "Tilgjengelige låser", field: "num_docks_available", type: "numeric"  },
                    { title: "Tilgjengelige sykler", field: "num_bikes_available", type: "numeric" }
                ]}
                data={stations}
                title="Oslo Bysykkel stasjoner:"
            />
        </div>
    );
};

export default StationTable;
