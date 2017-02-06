//Copyright 2017, Avery Vine, All rights reserved.

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

const ROOT = "./public";

app.set('views','./views');
app.set('view engine','pug');

//receive a port, or select default port
app.set('port', (process.env.PORT || 5000));

//log each server request
app.use(function(req, res, next) {
	console.log(req.method + " request for " + req.url);
	next();
});

//send asset files (images, pdfs, etc.)
app.get("/assets/:assetName", function(req, res) {
	res.sendFile(req.params.assetName, {root:'./public/assets'});
});

//redirects the user to the project webpage or github repo
app.get("/projects/:type/:projectName", function(req, res) {
	switch (req.params.type) {
		case "view":
			switch (req.params.projectName) {
				case "twoButtons":
					res.redirect(301, 'https://goo.gl/Ii7qXt');
					break;
				case "averyvine":
					res.redirect(301, 'http://averyvine.com');
					break;
				case "notepadd":
					res.redirect(301, 'http://notepadd.net');
					break;
				default:
					next();
			}
			break;
		case "github":
			switch (req.params.projectName) {
				case "twoButtons":
					res.redirect(301, 'https://github.com/AveryVine/twoButtonsGameiOS');
					break;
				case "averyvine":
					res.redirect(301, 'https://github.com/AveryVine/averyvineWebsite');
					break;
				case "notepadd":
					res.redirect(301, 'https://github.com/AveryVine/quacks17');
					break;
				default:
					next();
			}
			break;
		default:
			next();
	}
});

//render the home page
app.get(['/', '/index.html', '/index'], function(req, res) {
	res.render('index');
});

//send all other static files
app.use(express.static(ROOT));

//send 404 for anything other request
app.all("*", function(req, res) {
  res.status(404);
	res.render('404');
})

//start listening on the selected port
app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});
