
/*
 * GET home page.
 */
var showError = require('../client');
var client = require('../client');
var fs = require('fs');

exports.index = function(req, res){
  res.render('index');
};

exports.upload = function(req, res){
	var photo = req.body.files;

	fs.readFile(photo, function(error, data) {
		if (error) {
			return showError;
		}
		client.writeFile(photo, data, function(error, stat) {
			if (error) {
				return showError(error);
			}
		});
	});

  res.redirect('/');
};