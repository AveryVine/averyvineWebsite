//Copyright 2017, Avery Vine, All rights reserved.

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const discordBot = require('./discordBot.js');
const app = express();
const ROOT = "./public";

//receive a port, or select default port
app.set('port', (process.env.PORT || 5000));

//log each server request
app.use(function (req, res, next) {
	console.log(req.method + " request for " + req.url);
	next();
});

//send asset files (images, pdfs, etc.)
app.get("/assets/:assetName", function (req, res) {
	res.sendFile(req.params.assetName, {
		root: ROOT + '/assets'
	});
});

app.get("/konami/:type", function (req, res) {
	switch (req.params.type) {
		case "rickroll":
			res.redirect(301, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
			break;
		default:
			next();
	}
});

//render the home page
app.get(['/', '/index.html', '/index'], function (req, res) {
	res.sendFile('index.html', {
		root: ROOT
	});
});

//send all other static files
app.use(express.static(ROOT));

//send 404 for anything other request
app.all("*", function (req, res) {
	res.status(404);
	res.render('404');
})

//start listening on the selected port
app.listen(app.get('port'), function () {
	console.log('Server listening on port', app.get('port'));
	ping();
	setInterval(() => {
		ping();
	}, 1500000);

	discordBot.startBot();
});

//gets around the Heroku (hosting service) limit of 30 minutes of inactivity
function ping() {
	request('http://averyvine.com', function (error, response, body) {
		console.log('Pinged to keep dyno awake');
	});
}