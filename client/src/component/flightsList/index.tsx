import React from 'react';
import Flight from '../flight'


export default class FlightsList extends React.Component<any, any> {


    render() {
        const { flights } = this.props

        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        {flights.map((flight: any) => <Flight key={`flight_${flight.id}`}  {...flight} />)}
                    </div>
                </div>
            </div>
        )
    }
}
