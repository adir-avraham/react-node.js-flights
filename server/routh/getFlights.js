const express = require('express');
const router = express.Router();
const pool = require('../db/pool');





router.get('/', async (req, res, next) => {

    try{
        const [result] = await pool.execute(getFlights())
        console.log(result)
        return res.json(result);
    } catch {
        res.json("some error");
    }
})

function getFlights () {
    return "SELECT holidays.flights.id ,holidays.flights.from, holidays.flights.to, DATE_FORMAT(holidays.flights.departure,'%d/%m/%Y') as 'departure' , DATE_FORMAT(holidays.flights.arrival,'%d/%m/%Y') as 'arrival', company  FROM holidays.flights";
}

module.exports = router;