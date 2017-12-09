//Copyright 2017, Avery Vine, All rights reserved.

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const apiKeys = require('./apiKeys.js');
const league = require('./league.js');
const youtube = require('./youtube.js');
const twitch = require('./twitch.js');
const Discord = require('discord.js');

const app = express();
const client = new Discord.Client();

const ROOT = "./public";
const botName = "alfred";
const startBot = false;

//receive a port, or select default port
app.set('port', (process.env.PORT || 5000));

client.on('ready', () => {
	console.log('Discord Bot ' + botName.toUpperCase() + ' powered on.');
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
	loadApiKeysFromProcess();
	if (startBot) {
		client.login(apiKeys.discord);
	}
	console.log('Server listening on port', app.get('port'));
	ping();
	setInterval(() => {
		ping();
	}, 1500000);
});

//gets around the Heroku (hosting service) limit of 30 minutes of inactivity
function ping() {
	request('http://averyvine.com', function (error, response, body) {
		console.log('Pinged to keep dyno awake');
	});
}

function loadApiKeysFromProcess() {
	apiKeys.discord = process.env.discord;
	apiKeys.riot = process.env.riot;
	apiKeys.google = process.env.google;
	apiKeys.twitchId = process.env.twitchId;
}