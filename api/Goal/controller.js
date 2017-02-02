'use strict';

// @packages
var Promise = require('bluebird');

var models = require('../../models')
var GoalModel = models.goal;

// @promisify Model
Promise.promisifyAll(GoalModel)

var GoalController = {}

GoalController.getAllGoals = function (req, res) {
	console.log('heree', GoalModel)
	GoalModel.find({}, function (err, result) {
		console.log(result)
		if (err) {
			console.log(err);
			res.send(500)
		}
		else {
			res.send(result)
		}
	})
}

GoalController.createGoal = function(req, res) {
	// @params
	console.log(req.body)
	var body = req.body;
	var categoryId = body.category_id
	console.log(body)
	if (!categoryId) {
		return res.send('category_id missing from the request')
	}

	var saveObj = {
		'category_id': categoryId
	}
	GoalModel.createAsync(saveObj)
		.then(function (created) {
			console.log(created)
			res.send('goal created successfully')
		})
		.catch(function (err) {
			console.log(err)
		})
}

module.exports = GoalController
