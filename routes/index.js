
/*
 * GET home page.
 */

var client = require('../client');
var fs = require('fs');

exports.index = function(req, res){
  res.render('index');
};

exports.upload = function(req, res){
	var photo = req.body.files;

	fs.readFile(photo, function(error, data) {
		if (error) {
			return handleError;
		}
		client.writeFile(photo, data, function(error, stat) {
			if (error) {
				return handleError(error);
			}
		});
	});

  res.redirect('/');
};