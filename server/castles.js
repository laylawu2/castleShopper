const debug = require('debug')('auth')
const passport = require('passport')
const Castle = require('APP/db/models/castle')
const castlesRoute = require('express').Router()


castlesRoute.get('/:castleId',function(req,res,next) {

    Castle.findById(req.params.castleId)
            .then(foundCastleById => res.send(foundCastleById))
    
})

castlesRoute.post('/search/:searchByCategory',function(req,res,next) {
    Castle.findAll({
        where: {
            category: {
                $contains: [req.params.searchByCategory]
            }
        }
    })
        .then(result => res.send(result))


})



castlesRoute.get('/',function(req,res,next) {
    Castle.findAll({})
        .then(allCastles => res.send(allCastles))
        .catch(next);
})

castlesRoute.post('/', (req, res, next) => {
  console.log('castlesRoute post', req.body)
  Castle.create(req.body)
    .then(newCastle => {
      console.log('after create', newCastle)
      res.json(newCastle)
    })
    .catch(next)
})

module.exports = castlesRoute

