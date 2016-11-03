'user strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Bid = db.define('bid', {
  bidPrice: {
    type: Sequelize.DECIMAL(20, 2),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('accepted', 'rejected', 'pending'),
    defaultValue: 'pending'
  },
  purchased: {
    type: Sequelize.ENUM('paid', 'not-paid'),
    defaultValue: 'not-paid'
  }
})

module.exports = Bid
