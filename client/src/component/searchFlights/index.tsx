import React from "react";
import axios from "axios";
import FlightsList from '../flightsList'

const searchFlightsUrl = "http://localhost:4000/searchFlights";

export default class SearchFlights extends React.Component<any, any> {
  state = {
    departure: "",
    arrival: "",
    flightsResulrt: []
  };

  handleChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = async () => {
    const { departure, arrival } = this.state;
    const result = await axios.post(searchFlightsUrl, { departure, arrival });
    console.log("here", result)
    this.setState({ flightsResulrt: result.data });
  };

  render() {

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="text-left col-lg-4">
            <form className="form-signin">
              <div className="text-center mb-4">
                <img
                  className="mb-4 mt-5"
                  src="https://cdn5.vectorstock.com/i/1000x1000/75/59/caucasian-woman-searching-information-on-a-laptop-vector-16587559.jpg"
                  alt="pic"
                  width="142"
                  height="122"
                />
                <p>Hello</p>
                {/* <p>{this.state.resultMessage}</p> */}
              </div>
              <div className="form-label-group">
                <label htmlFor="inputFirstName">Departure</label>
                <input
                  type="date"
                  id="inputFirstName"
                  className="form-control"
                  placeholder="Departure"
                  required
                  name="departure"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-label-group mt-2">
                <label htmlFor="inputLastName">Arrival</label>
                <input
                  type="date"
                  id="inputLastName"
                  className="form-control"
                  placeholder="Arrival"
                  required
                  name="arrival"
                  onChange={this.handleChange}
                />
              </div>

              <button
                className="btn btn-lg btn-success btn-block mt-3"
                type="button"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {<FlightsList flights={this.state.flightsResulrt}/>}  
      </div>
    );
  }
}
