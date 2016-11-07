'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Castle = require('./castle')
const Review = require('./review')
const Bid = require('./bid')

//associations

Bid.belongsTo(User);

Bid.belongsTo(Castle);

Review.belongsTo(Castle);

//Purchase.belongsTo(Bid)

// Order.belongsTo(Castle);
// a product can many orders == many people can order the sane products
// an order can have many castles
// make an offer/ bid, admin choooses one, status: accepted
// price flutruate
// ditch order and have bids
// bids may have in response to

//Bid.belongsToMany(Castle, {through: 'UserCastleOrder'})

// Castle belongsTo(Order)
// Order.belongsTo(User)
// Order.belongsToMany(Castles)
// Memories.belongsTo(User)
// Memories.belongsTo(Castle)

// bid model
// has date and mailing info, status

// review belongs a user, belongs casetle
// bid belongs to user
// bid belongs to castle
// when click on bid, the bid goes to the bid table
// add Purchased column to the bid table as ENUM ('paid', 'not paid')

module.exports = {User,Castle, Review, Bid}

