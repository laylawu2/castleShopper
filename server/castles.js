const debug = require('debug')('auth')
const passport = require('passport')
const Castle = require('APP/db/models/castle')
const castlesRoute = require('express').Router()

castlesRoute.get('/:searchword',function(req,res,next) {
    if (+req.params.searchword === NaN) {
        Castle.findAll({
        where: {
            category: {
                $contains: [req.params.searchword]
            }
        }
    })
        .then(result => res.send(result))
        .catch(next)
    }

    if (+req.params.searchword !== NaN) {
        Castle.findOne({
        id: req.params.castleId
    })
        .then(foundCastle => res.send(foundCastle))
        .catch(next);
    }
    
})

castlesRoute.get('/',function(req,res,next) {
    Castle.findAll({})
        .then(allCastles => res.send(allCastles))
        .catch(next);
})



module.exports = castlesRoute

