const debug = require('debug')('auth')
const passport = require('passport')
const Castle = require('APP/db/models/castle')
const homeRoute = require('express').Router()

homeRoute.get('/',function(req,res,next) {
    Castle.findAll({})
        .then(allCastles => res.json(allCastles))
        .catch(next);
})


module.exports = homeRoute

