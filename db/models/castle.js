'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

module.exports = db.define('castles', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    price: {
        type: Sequelize.DECIMAL(10,2), 
        allowNull: false
    }, 
    location: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    imageUrl: {
        type: Sequelize.STRING, 
        allowNull: false,
        defaultValue: "https://goo.gl/hCvhhb"
    }, 
    size: {
        type: Sequelize.INTEGER, 
        allowNull: false
    }, 
    amenities: {
        type: Sequelize.JSON
    }, 
    description: {
        type: Sequelize.TEXT, 
        allowNull: false
    }, 
    historyLink: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.ARRAY(Sequelize.TEXT), 
        allowNull: false
    }
}, {
    getterMethods: {
        checkoutSnippet: function() {
            this.description = this.description.slice(0,200).concat('...')
        }
    }
    }
)

