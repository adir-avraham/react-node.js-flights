const express = require("express");
const router = express.Router();
const pool = require("../db/pool");
const flightValidation = require('../validations/flightValidation');

router.use(flightValidation);

router.post("/", async (req, res, next) => {
    try {
    const {from, to, departure, arrival, company} = req.body;
        const [result] = await pool.execute(addFlightQuery(), [from, to, departure, arrival, company]) 
        const insertId = result.insertId
        console.log(result);
        if (insertId) return res.json({ message: "flight saved!", redirect: true, id: insertId });
        return res.json({ message: "some error", redirect: false }); 
    } catch {
        return res.json({ message: "some error", redirect: false }); 
    }
});

function addFlightQuery() {
    return "INSERT INTO `holidays`.`flights` (`from`, `to`, `departure`, `arrival`, `company`) VALUES (?,?,?,?,?)";
}


module.exports = router;