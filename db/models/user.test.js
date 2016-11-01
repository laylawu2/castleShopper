'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('User', () => {

  before('wait for the db', () => db.didSync)

  // test for required fields first, last, password, username, email
  // describe('firstName is required', () => {
  //   let user = User.build({
  //     lastName: "Hopper",
  //     username: "hopper",
  //     password: "ok",
  //     email: "ok@ok.com"
  //   });

  //   return user.validate()
  //   .then(function (result) {
  //     expect(result).to.be.an.instanceOf(Error);
  //     expect(result.message).to.contain('Validation error');
  //   });
  // });

  // describe('lastName is required', () => {
  //   let user = User.build({
  //     firstName: "Hopper",
  //     username: "hopper",
  //     password: "ok",
  //     email: "ok@ok.com"
  //   });

  //   return user.validate()
  //   .then(function (result) {
  //     expect(result).to.be.an.instanceOf(Error);
  //     expect(result.message).to.contain('Validation error');
  //   });

  // });

  // describe('email is required', () => {
  //   let user = User.build({
  //     lastName: "Hopper",
  //     username: "hopper",
  //     password: "ok",
  //     firstName: "ok@ok.com"
  //   });

  //   return user.validate()
  //   .then(function (result) {
  //     expect(result).to.be.an.instanceOf(Error);
  //     expect(result.message).to.contain('Validation error');
  //   });

  // });

  // describe('password is required', () => {
  //   let user = User.build({
  //     lastName: "Hopper",
  //     username: "hopper",
  //     firstName: "ok",
  //     email: "ok@ok.com"
  //   });

  //   return user.validate()
  //   .then(function (result) {
  //     expect(result).to.be.an.instanceOf(Error);
  //     expect(result.message).to.contain('Validation error');
  //   });

  // });

  // describe('username is required', () => {
  //   let user = User.build({
  //     lastName: "Hopper",
  //     firstName: "hopper",
  //     password: "ok",
  //     email: "ok@ok.com"
  //   });

  //   return user.validate()
  //   .then(function (result) {
  //     expect(result).to.be.an.instanceOf(Error);
  //     expect(result.message).to.contain('Validation error');
  //   });

  // });
  let grace = {
    firstName: "Grace",
    lastName: "Hopper",
    username: "gracehopper",
    email: "grace@hopper.com",
    password: "ok"
  }

  // test for validations
  describe('email needs to be valid', () => {
    it('valid email', () => {
      let user = User.build(grace);
      return user.validate()
        .then(result => {
          expect(result).to.be.null;
        });
    });

    it('invalid email', () => {
      grace.email = "grace";
      let user = User.build(grace);
      return user.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain("Validation error");
        });
    });
  });

  // password authentication
  describe('authenticate(plaintext: String) ~> Boolean', () => {
    User.create(grace)
      .then(user => {

        it('resolves true if the password matches', () => {
          let result = user.authenticate('ok');
          expect(result.to.be.true);
        });

        it("resolves false if the password doesn't match", () => {
          let result = user.authenticate('not ok');
          expect(result.to.be.true);
        });
      });
  });

  // getterMethods
  describe('getterMethods', () => {
    it('fullName returns "firstName lastName"', () => {
      /************ needs to change ************/
      grace.email = "newEmail@email.com"; // just to avoid conflict in db
      User.create(grace)
        .then(user => (expect(user.fullName).to.equal("Grace Hopper")));
    });
  });
  
});