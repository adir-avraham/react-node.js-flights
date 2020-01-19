const express = require("express");
const router = express.Router();
const pool = require("../db/pool");


router.post("/", async (req, res, next) => {
    
    try {
        const [query, params] = deleteFlightQuery(req.body)
        const [result] = await pool.execute(query, params) 
        const affectedRows = result.affectedRows;
        if (affectedRows > 0) return res.json({ message: "flight deleted!!", redirect: true, affectedRows: affectedRows });
        return res.json({ message: "some error", redirect: false }); 
    } catch {
        return res.json({ message: "some error", redirect: false }); 
    }

});

function deleteFlightQuery(params) {
    return ["DELETE FROM `holidays`.`flights` WHERE (`id` = ?)", [...Object.values(params)] ]
}


module.exports = router;