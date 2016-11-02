'user strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const UserCastle = db.define('orders', {
  quantity: Sequelize.INTEGER,
})

module.exports = UserCastle
