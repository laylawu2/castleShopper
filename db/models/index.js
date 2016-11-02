'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Castle = require('./castle')
const Review = require('./review')
const Memory = require ('./memory')

//associations

// Order.belongsTo(User)
// Order.belongsToMany(Castles) 
// Memories.belongsTo(User) 
// Memories.belongsTo(Castle)

Memory.belongsTo(User, { as: 'memory' });
Memory.belongsTo(Castle, { as: 'memory' });


module.exports = {User,Castle, Review}
