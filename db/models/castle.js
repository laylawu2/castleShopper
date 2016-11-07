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
//        allowNull: false,
    },
    location: {
        type: Sequelize.STRING,
//        allowNull: false
    },
    imageUrl: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
 //       allowNull: false,
        defaultValue: ['https://goo.gl/hCvhhb'],
        set: function(imageLinks) {
            imageLinks = imageLinks || []
            if (typeof imageLinks === 'string') {
                imageLinks = imageLinks.split(',').map(function (str) {
                    return str.trim();
                });
            }
            this.setDataValue('imageUrl', imageLinks);
        }
    },
    size: {
        type: Sequelize.INTEGER,
//        allowNull: false,
       set      : function(val) {
      this.setDataValue('size', parseInt(val));
    }
    },
    amenities: {
        type: Sequelize.JSON
    },
    description: {
        type: Sequelize.TEXT,
  //      allowNull: false
    },
    historyLink: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
  //      allowNull: false
        set: function(tags) {
            tags = tags || []
            if (typeof tags === 'string') {
                tags = tags.split(',').map(function (str) {
                    return str.trim();
                });
            }
            this.setDataValue('category', tags);
        }
    }
}, {
    getterMethods: {
        // checkoutSnippet: function(){
        //     const snippet = this.description.substring(0, 100);
        //     return snippet;
        // }
    }
})

