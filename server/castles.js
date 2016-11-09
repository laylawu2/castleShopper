const debug = require('debug')('auth')
const passport = require('passport')
const Castle = require('APP/db/models/castle')
const castlesRoute = require('express').Router()
const Review = require('../db/models/review')

castlesRoute.get('/:castleId',function(req,res,next) {

    Castle.findById(req.params.castleId)
            .then(foundCastleById => res.send(foundCastleById))

})

// castlesRoute.get('/:castleId', (req, res, next) => {
//         Review
//             .findAll({
//                 where: {
//                     castle_id: req.params.castleId
//                 }
//             })
//             .then(reviews => res.status(200).send(reviews))
//             .catch(console.error);
//     })

// castlesRoute.get('/:castleId',function(req,res,next) {

//     Castle.findById(req.params.castleId)
//             .then(foundCastleById => {
//                 return Review
//                     .findAll({
//                         where: {
//                             castle_id: req.params.castleId
//                         }
//                     })
//             })

//             .then(res.send(reviews))

// })
castlesRoute.get('/search/:searchByCategory',function(req,res,next) {
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
//  console.log('castlesRoute post', req.body)
  Castle.create(req.body)
    .then(newCastle => {
//      console.log('CREATEDDDDD', newCastle)
      res.json(newCastle)
    })
    .catch(console.error)
})

castlesRoute.post('/:castleId', function(req, res, next){

     console.log("IN POST", req.params.castleId)
    Castle.update(req.body, {
        where: {
            id: req.params.castleId
        }
    })
      .then(newCastleArray => {
          res.status(201).send(newCastleArray)
      })
      .catch(next)
})



module.exports = castlesRoute

