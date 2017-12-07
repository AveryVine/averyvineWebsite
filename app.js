//Copyright 2017, Avery Vine, All rights reserved.

const apiKeys = require('./apiKeys.js');
const league = require('./league.js');
const youtube = require('./youtube.js');
const twitch = require('./twitch.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const botName = "alfred";
var discordToken = "";

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

const ROOT = "./public";

app.set('views', './views');

//receive a port, or select default port
app.set('port', (process.env.PORT || 5000));

client.on('ready', () => {
	console.log('Discord Bot powered on.');
});

client.on('message', message => {
	if (!message.author.bot) {
		if (message.content.toLowerCase().startsWith(botName + " ")) {
			var content = message.content.replace(new RegExp(botName + ' ', 'ig'), '').trim();
			if (content.toLowerCase() === 'ping') {
				message.channel.send('pong');
			} else if (content.toLowerCase().startsWith('summoner ')) {
				content = content.replace(/(summoner )/ig, '').trim();
				league.summoner(message, content);
			} else if (content.toLowerCase().startsWith('youtube ')) {
				content = content.replace(/(youtube )/ig, '').trim();
				youtube.search(message, content);
			} else if (content.toLowerCase().startsWith('twitch ')) {
				content = content.replace(/(twitch )/ig, '').trim();
				twitch.search(message, content);
			}
		}
	}
});

//log each server request
app.use(function (req, res, next) {
	console.log(req.method + " request for " + req.url);
	next();
});

//send asset files (images, pdfs, etc.)
app.get("/assets/:assetName", function (req, res) {
	res.sendFile(req.params.assetName, {
		root: './public/assets'
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

//redirects the user to the project webpage or github repo
app.get("/projects/:type/:projectName", function (req, res) {
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
				case "javaSwing":
					res.redirect(301, 'https://github.com/AveryVine/JavaSwingGame');
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
app.get(['/', '/index.html', '/index'], function (req, res) {
	res.sendFile('index.html', {
		root: './public'
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
	client.login(apiKeys.discord);
	console.log('Server listening on port', app.get('port'));
});