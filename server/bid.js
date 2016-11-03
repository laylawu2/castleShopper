const express = require('express');
const mime = require('mime');
const router = express.Router();
const models = require('../db/models');
const Bid = models.Bid;
module.exports = router;