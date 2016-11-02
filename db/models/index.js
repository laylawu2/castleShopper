'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Castle = require('./castle')
const Review = require('./review')
const Order = require('./order')

//associations

Order.belongsTo(User);
// Order.belongsTo(Castle);
// a product can many orders == many people can order the sane products
// an order can have many castles
User.belongsToMany(Castle, {through: 'UserCastleOrder'})

// Order.belongsTo(User)
// Order.belongsToMany(Castles)
// Memories.belongsTo(User)
// Memories.belongsTo(Castle)


module.exports = {User,Castle, Review, Order}

