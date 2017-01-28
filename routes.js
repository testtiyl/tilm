'use strict'

module.exports = function(app, multiPartMiddlerWare) {
	app.use('/api/goals', require('./api/Goal'))
}