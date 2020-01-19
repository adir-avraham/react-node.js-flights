import React from 'react';
import axios from 'axios';
import FlightsList from '../flightsList';
import {connect} from 'react-redux';
import {setFlights} from '../../redux/actions';

const flightsUrl = ("http://localhost:4000/getFlights");

export class Flights extends React.Component<any, any> {

    state = {
        flights: []
    }

    componentDidMount =  async ()  =>  {
        try{     
            const result = await axios.get(flightsUrl);
            const {setFlights} = this.props;
            setFlights(result.data)
            //this.setState({flights: result.data})
        } catch {
            console.error("some error");
        }
    }
    
    render() {
        const {flights} = this.props
        return (
            <div>
                <FlightsList flights={flights}/>    
            </div>
        )
    }  
}

const mapStateToProps = (state: any) => {
    const { flights } = state
    return { flights };
}



const mapDispatchToProps = (dispatch: any) => ({
   

        setFlights: (flights: any) => dispatch(setFlights(flights))
    
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Flights);