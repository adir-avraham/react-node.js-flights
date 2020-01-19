import axios from 'axios';
import React from 'react';


const addFlightUrl = ('http://localhost:4000/addFlight');


export default class AddFlight extends React.Component <any,any> {

state = {
  from: "",
  to: "",
  departure: "",
  arrival: "",
  company:"",
  message: "Hello"
}

handleOnChange = (event: any) =>{
  const { target } = event;
  this.setState({[target.name]: target.value})
}

handleAddFlight = async () => {
  const {from, to, departure, arrival, company} = this.state
  const result = await axios.post(addFlightUrl, {from, to, departure, arrival, company})
  console.log("res to check", result)
  const {redirect, message} = result.data
  if (redirect) {
    alert(message)
    this.props.history.push('/flights')
  } else {
    console.log(result.data.errMessage.details[0].message)
    const {message} = result.data.errMessage.details[0]
    this.setState( {message: message})
  }
  console.log(this.state)
}

render() {
  const {message} = this.state
  return (
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="text-center col-lg-4">
        <form className="form-signin">
          <img className="mb-4" src="https://cdn1.iconfinder.com/data/icons/symbol-color-transport-1/32/airplane_2-add-512.png" alt="" width="155" height="155" />
          <h1 className="h3 mb-3 font-weight-normal">Add Flight</h1>
          <label htmlFor="inputFrom" className="sr-only">From </label>
          <input  
          id="inputFrom" 
          className="form-control" 
          placeholder="from"
          name="from" 
          required
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputLastName" className="sr-only">To</label>
          <input  
          id="inputTo"
          className="form-control" 
          placeholder="To"
          name="to" 
          required
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputDeparture">Departure</label>
          <input  
          type="date" 
          id="inputDeparture" 
          className="form-control" 
          placeholder="Departure"
          name="departure" 
          required
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputArrival">Arrival</label>
          <input type="date"
          id="inputArrival"
          className="form-control"
          placeholder="Arrival"
          name="arrival"
          required
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputCompany" className="sr-only">Company</label>
          <input type="text"
          id="inputCompany"
          className="form-control"
          placeholder="Company"
          name="company"
          required
          onChange={this.handleOnChange}
          />
          <div className="checkbox mb-3">
          {message === "Hello" ? <span>{message}</span> : <span className="text-danger">{message}</span>}
          </div>
          <button className="btn btn-lg btn-success btn-block"
          type="button"
          onClick={this.handleAddFlight}
          >Save</button>
        </form>
      </div>
    </div>
  </div>
  );
}
}



