const express = require("express")
const Joi = require("@hapi/joi");
const flightSchema =
    Joi.object({
        from: Joi.string().required(),
        to: Joi.string().required(),
        departure: Joi.date(),
        arrival: Joi.date(),
        company: Joi.string().required()
    })


function flightValidation(req, res, next) {
    const { error } = flightSchema.validate(req.body);
    if (error) return res.json({ errMessage: error })
    next();
}


module.exports = flightValidation;