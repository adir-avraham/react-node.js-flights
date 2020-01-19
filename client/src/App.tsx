import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Flights from './component/flights';
import Navbar from './component/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FlightsTable from './component/flights-table';
import SearchFlights from './component/searchFlights';
import AddFlight from './component/add-flight';


const App: React.FC = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Switch>
        
          <Route path="/flights" component={Flights} />      
          <Route path="/searchFlights" component={SearchFlights} />   
          <Route path="/flights-table" component={FlightsTable} />  
          <Route path="/add-flight" component={AddFlight} />    
          <Route path="**" component={Flights} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
