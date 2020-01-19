const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();


const getFlights = require('./routh/getFlights');
const addFlight = require('./routh/addFlight');
const searchFlights = require('./routh/searchFlights');
const deleteFlight = require('./routh/deleteFlight');
const updateFlight = require('./routh/updateFlight');

app.use(cors());
app.use(bodyParser.json());




app.use('/getFlights', getFlights);
app.use('/addFlight', addFlight);
app.use('/searchFlights', searchFlights);
app.use('/deleteFlight', deleteFlight);
app.use('/updateFlight', updateFlight)

app.listen(process.env.PORT, () => {
    console.log("Server is listening to port: " + process.env.PORT);
})