import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteFlight} from '../../redux/actions';

const deleteFlightUrl = ('http://localhost:4000/deleteFlight');


export class Flight extends React.Component<any, any> {
 
    state = {
        message: "",
    }
    
    handleOnClick = async (event: any) => {
        const { id } = event.target;
        const result = await axios.post(deleteFlightUrl, {id})
        const {redirect, message} = result.data 
        if (redirect) {
            const { deleteFlight } = this.props;
            deleteFlight(parseInt(id))
            alert(message)
        } else {
          alert(message)
        }
    }
    
    render() {
        const { id, from , to, departure, arrival, company } = this.props
                
        return (        
            <div className="col-sm">
                <div className="card border-dark mb-3 shadow-lg" style={{minWidth: "18rem" ,maxWidth: "18rem"}}>
                    <div className="card-header">From: {from} To: {to}</div>
                    <div className="card-body text-dark">
                    <h5 className="card-title">dep: {departure}   arv:{arrival}</h5>
                    <p className="card-text">{company}</p>
                    <button id={id} className="btn btn-danger btn-sm" 
                    onClick={this.handleOnClick}
                    >Delete</button>
                    </div>
                </div>      
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    
    deleteFlight: (flightId: any) => dispatch(deleteFlight(flightId))
  })
  
  export default connect(null, mapDispatchToProps)(Flight);

