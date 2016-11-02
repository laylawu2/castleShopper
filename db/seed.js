const db = require('APP/db')
const data = require('./data')
const Promise = require('bluebird')

// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedUsers)
//   .then(users => console.log(`Seeded ${users.length} users OK`))
//   .catch(error => console.error(error))    
//   .finally(() => db.close())



db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});