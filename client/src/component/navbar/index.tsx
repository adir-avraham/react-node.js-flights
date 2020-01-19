import React from 'react';
import { Link } from "react-router-dom";



export default class Navbar extends React.Component<any, any> {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to="/flights/">
              <span className="nav-link">Flights <span className="sr-only">(current)</span></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/searchFlights/">
              <span className="nav-link">Search a flight <span className="sr-only">(current)</span></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/flights-table/">
              <span className="nav-link">Flights table <span className="sr-only">(current)</span></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/add-flight/">
              <span className="nav-link">Add flight <span className="sr-only">(current)</span></span>
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
