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
}, {
  instanceMethods: {
    getHighestBid: function(castleId){
      Bid.findAll({
        where: {
          castle_id: castleId
        }
      })
        .then(bids => {
          console.log("BIDSININSTANCE", bids)
        })
    }
  }
})

// addChild: function(field) {
//       field.parentId = this.id;
//       return Task.create(field)
//       .then(newRow => {
//         return newRow;
//       })
//     }

