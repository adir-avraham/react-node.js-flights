const express = require("express");
const router = express.Router();
const pool = require("../db/pool");


router.post("/", async (req, res, next) => {
    
    try {
        const [query, params] = getFlightsByDatesQuery(req.body)
        const result = await pool.execute(query, params) 
        
        console.log(result)
        const [first] = result
        return res.json(first);
    } catch {
        return res.json("some error")
    }

});

function getFlightsByDatesQuery(params) {
    return ["SELECT holidays.flights.from, holidays.flights.to, DATE_FORMAT(holidays.flights.departure,'%d/%m/%Y') as 'departure' , DATE_FORMAT(holidays.flights.arrival,'%d/%m/%Y') as 'arrival', company FROM holidays.flights WHERE departure > ? AND arrival < ?", [...Object.values(params)] ]
}


module.exports = router;