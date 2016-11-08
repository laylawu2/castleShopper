const express = require('express');
const mime = require('mime');
const router = express.Router();
const Bid = require('APP/db/models/bid');


// get all bids
// get bids from a certain user
// get all paid bids
// get all unpaid bids
//api/bids/byuser/:userid


router.get('/', function(req, res, next){
    Bid.findAll()
      .then( bids => {
          res.status(200).json(bids)
      })
});

router.get('/paid', function(req,res, next){
    Bid.findAll({
        where: {
            purchased: 'paid'
        }
    })
      .then(bids => {
          res.status(200).json(bids)
      })
});

router.get('/unpaid', function(req, res, next){
    Bid.findAll({
        where: {
            purchased: 'unpaid'
        }
    })
      .then(bids => {
          res.status(200).json(bids)
      })
});

router.get('/user/:userId', function(req, res, next){

    Bid.findAll({
        where: {
            user_id: req.params.userId
        }
    })
      .then(bids => {
          res.status(200).json(bids)
      })
});

router.get('/castle/:castleId', function(req, res, next){
    Bid.findAll({
        where: {
            castle_id: req.params.castleId
        }
    })
    .then(bids => {
        res.status(200).json(bids)
    })
});

router.post('/user/:userId/castle/:castleId', function(req, res, next){
    console.log("REQ.BODY", req.body)
    req.body.castle_id = req.params.castleId;
    req.body.user_id = req.params.userId;
    // req.body.bidPrice = 25000000;
     console.log("IN POST", req.body.castle_id, req.body.user_id, req.body)
    Bid.create(req.body)
      .then(newBid => {
          res.status(201).send(newBid)
      })
      .catch(next)
})

module.exports = router;