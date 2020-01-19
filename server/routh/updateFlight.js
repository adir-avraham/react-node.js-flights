const express = require("express");
const router = express.Router();
const pool = require("../db/pool");



router.post("/", async (req, res, next) => {
   
    try {
        const {id, from, to, departure, arrival, company }  = req.body
        const [result] = await pool.execute(updateFlightQuery(), [from, to, departure, arrival, company, id]) 
        const affectedRows = result.affectedRows
        if (affectedRows > 0) return res.json({ message: "flight updated!", redirect: true, affectedRows: affectedRows });
        return res.json({ message: "some error", redirect: false }); 
    } catch {
        return res.json({ message: "some error", redirect: false }); 
    }
});

function updateFlightQuery() {
return "UPDATE `holidays`.`flights` SET `from` = ?, `to` = ?, `departure` = ?, `arrival` = ? , `company` = ? WHERE (`id` = ?)"
}


module.exports = router;









