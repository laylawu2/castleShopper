'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

module.exports = db.define('reviews',{
    subject: {
        type: Sequelize.STRING,
        defaultValue: 'No subject'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY,
        // allowNull: false
    },
    star: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        allowNull: false
    }
})

