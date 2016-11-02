'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

 module.exports = db.define('memory', {
    textBody: {
        type: Sequelize.TEXT, 
        allowNull: false
    }, 
    starRating: {
        type: Sequelize.INTEGER, 
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY, 
        //should be automatically generated
        //for user
    },
    headline: {
        type: Sequelize.STRING, 
        allowNull: false
    } 

})



