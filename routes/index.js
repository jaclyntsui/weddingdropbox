
/*
 * GET home page.
 */

var fs = require('fs');
var path = require('path');
var client = require('../client');
var showError = require('../client');

exports.index = function(req, res){
  res.render('index');
};

exports.upload = function(req, res){
	// console.log(req);
	console.log(req.files);
	var file = req.files.file;
	var filePath = file.path;
	var targetPath = path.resolve('./uploads/', file.name);

	// var file = files.file;
	fs.rename(filePath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });

	fs.readFile(targetPath, function(error, data) {
		if (error) {
			return showError;
		}

		client.writeFile(targetPath, data, function(error, stat) {
			if (error) {
				return showError(error);
			}
		});

});

  res.redirect('/');
};