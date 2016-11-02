'user strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  quantity: Sequelize.INTEGER,
})

module.exports = Order
