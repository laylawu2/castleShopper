'user strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

module.exports = db.define('bids', {
  bidPrice: {
    type: Sequelize.DECIMAL(20, 2),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('accepted', 'rejected', 'pending'),
    defaultValue: 'pending'
  },
  purchased: {
    type: Sequelize.ENUM('paid', 'unpaid'),
    defaultValue: 'unpaid'
  }
})


