'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Castle = db.define('castles', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    price: {
        type: Sequelize.Decimal, 
        allowNull: false
    }, 
    location: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    image: {
        type: Sequelize.ARRAY(Sequelize.TEXT), 
        allowNull: false
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
        type: Sequelize.TEXT
    }
}, {
    getterMethods: {
        checkoutSnippet: function(){
            const snippet = this.description.substring(0, 100);
            return snippet;
    }
    }
})
