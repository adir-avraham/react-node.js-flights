import React from "react";
import axios from "axios";
import Table from "../table";

const getFlightsUrl = "http://localhost:4000/getFlights";

export default class FlightsTable extends React.Component<any, any> {
  state = {
    flights: []
  };

  componentDidMount = async () => {
    try {
      const result = await axios.get(getFlightsUrl);
      this.setState({ flights: result.data });
    } catch {
      console.log("some error");
    }
  };


  render() {
      const { flights } = this.state;
      if (!flights.length) return <h2>No data</h2>
      const headers = getHeaders(flights); 
      const data = getTableBody(flights); 
      
      return (
          <div>
              <h1>Flights table</h1>
              <Table headers={headers} data={data}/>
      </div>
    );
}
}


function getHeaders(data: any) {
    if (!data.length) return;
    const [firstItemInArray] = data;
    return Object.keys(firstItemInArray).map((header: any, index: number) =>  <th key={"th_" + index} scope="col">{header}</th>)
    
}

function getTableBody(data: any) {
    return data.map((dataItem: any, index:number) =>{
        return <tr key={"tr_" + index} >{getTableRow(dataItem)}</tr>
    })
}


function getTableRow(row: any) {
    return Object.entries(row).map(([key, value], index) => {
        return <td key={"td_" + index}> {value}</td>;
    });
}