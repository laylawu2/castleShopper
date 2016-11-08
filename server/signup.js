const User = require('APP/db/models/user')
const signupRoute = require('express').Router()

signupRoute.post('/',function(req,res,next) {
    console.log('inside backend route...',req.body)
    User.create(req.body)
        .then(result => res.send(result))
        .catch(next)
})

module.exports = signupRoute