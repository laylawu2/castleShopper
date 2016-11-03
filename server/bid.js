const express = require('express');
const mime = require('mime');
const router = express.Router();
const models = require('../db/models');
const Bid = models.Bid;

// get all bids
// get bids from a certain user
// get all paid bids
// get all unpaid bids

router.get('/', function(req, res, next){
    Bid.findAll()
      .then( bids => {
          res.status(200).json(bids)
      })
});

router.get('/:userid', function(req, res, next){

    Bid.findAll({
        where: {
            userid: req.params.userid
        }
    })
      .then(bids => {
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

module.exports = router;