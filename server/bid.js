const express = require('express');
const mime = require('mime');
const router = express.Router();
const Bid = require('APP/db/models/bid');
const User = require('APP/db/models/user');
const Castle = require('APP/db/models/castle');
const db = require('APP/db');


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

// findAndCountAll({
//      where: {
//         title: {
//           $like: 'foo%'
//         }
//      },
//      offset: 10,
//      limit: 2
//   })

// Bid.findAll({
//         include: [{attributes: ['id']}],
//         where: {
//             user_id: req.params.userId
//     }, 
//         group: ['castle_id']
        
//     })

router.get('/user/:userId', function(req, res, next){
    User.findById(req.params.userId, {include: {
        model: Castle
    }}).then(user => db.Promise.props({
        user: JSON.parse(JSON.stringify(user)),   // i'm so so so so sorry ~ ak
        castleBids: db.Promise.map(user.castles, castle => castle.getBids())
    })).then( ({user, castleBids}) => {
        for(let i = 0; i<castleBids.length; i++){
            user.castles[i].bids = castleBids[i];
        }
        res.status(200).send(user)
    })
    // Bid.findAll({
    //     where: {
    //         user_id: req.params.userId
    //     }, 
    //     group: ['castle_id']
    // })
    //   .then(bids => {
    //       res.status(200).json(bids)
    //   })


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