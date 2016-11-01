'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Castle = require('./castle')
const Review = require('./review')


//associations

// Order.belongsTo(User)
// Order.belongsToMany(Castles) 
// Memories.belongsTo(User) 
// Memories.belongsTo(Castle)


module.exports = {User,Castle, Review}
