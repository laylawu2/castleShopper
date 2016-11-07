// 'use strict'

// const db = require('APP/db')
// const Order = require('./order')
// const {expect} = require('chai')
// const User = require('./user')
// const Castle = require('./castle')
// const Promise = require('bluebird')


// describe('Order Model', () => {
//   let order, user, castle
//   // before('wait for the db', (done) => db.didSync)

//   before(() => db.didSync)

//   before(() => {
//         return Promise.all([
//           User.create({
//             firstName: 'John',
//             lastName: 'Bone',
//             email: 'john@gmail.com',
//           }),
//           Castle.create({
//             name: 'hogwarts',
//             price: 13000.00,
//             location: 'england',
//             image: ['https://goo.gl/sRKMgT'],
//             size: 100,
//             description: 'wizarding school',
//             category: ['magic']
//           }),
//           Order.create({
//             quantity: 3
//           })
//         ])
//         .spread((_user, _castle, _order)=> {
//           user = _user;
//           castle = _castle;
//           order = _order;
//           order.setUser(user)
//       })
//         .catch(err => console.error(err))
//     }) //end of beforeEach

//     after(() => {
//       Promise.all([user.destroy(), order.destroy(), castle.destroy()])
//         .then(() => console.log('database is cleared!!!'))
//         .catch(err => console.error(err))
//     })
//     it('has a user_id field', () => {
//       expect(order.user_id).to.equal(1);
//     })

//     it('has quantity', () => {
//       expect(order.quantity).to.equal(3);
//     })

// }) // end of describe Order Model
