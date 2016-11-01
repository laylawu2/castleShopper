'use strict'

const expect = require('chai').expect;
const Bluebird = require('bluebird');
const db = require('APP/db');
// const Castle = require('APP/db/models/castle')
const Castle = require('./castle')

describe('Castle model', function () {
  before('wait for the db', () => db.didSync)

  //clear the database before all tests
  beforeEach(function () {
    return db.sync({force: true});
  });

  // erase all tasks after each spec
  afterEach(function(){
    return db.sync({force: true});
  });

  describe('Castle model',function() {
    
    it('has the expected schema definition', () => {
            expect(Castle.name).to.be.an('string');
        });
    
    describe('functionality',function() {
        
        var hogwarts;
        var sleepingBeauty;
        beforeEach('Seed castles', () => {
                const castles = [
                    {
                        name: 'hogwarts',
                        price: 1300000.00,
                        location: 'england',
                        image: ['https://goo.gl/sRKMgT'],
                        size: 100000,
                        description: 'wizarding school',
                        category: ['magic']
                    },
                    {
                        name: 'sleeping beauty castle',
                        price: 200000.0,
                        location: 'united states',
                        image: ['https://goo.gl/bQDO2u'],
                        size: 20000,
                        description: 'sleeping beauty\'s castle at disneyland',
                        category: ['magic','fake']
                    }
                ];
                return Castle.bulkCreate(castles, {returning: true})
                    .then(createdCastles => {
                        hogwarts = createdCastles[0];
                        console.log('price========',createdCastles[0].price)
                        sleepingBeauty = createdCastles[1];
                    });
            });
            console.log('*****',hogwarts)
            

        describe('testing',function() {
            // console.log('.......',hogwarts)
            describe('checkoutSnippet',function() {
                it('name is a string',function() {
                    expect(Castle.name).to.be.a('string')
                })
                // it('hogwarts castle exists',function() {
                //     expect(hogwarts.name).to.be.a('hogwarts')
                // })
        })
     })
    })
})
})