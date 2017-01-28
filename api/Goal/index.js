'use strict'

var express = require('express');
var controller = require('./controller');

var router = express.Router();

router.get('/getall', controller.getAllGoals);
router.post('/create', controller.createGoal)


module.exports = router