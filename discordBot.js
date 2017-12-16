const apiKeys = require('./apiKeys.js');
const league = require('./league.js');
const youtube = require('./youtube.js');
const twitch = require('./twitch.js');
const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();
const $ = module.exports;

client.on('ready', () => {
	console.log('Discord Bot powered on.');
});

client.on('message', message => {
	const commands = {
		"summoner": function () { league.summoner(message, content) },
		"youtube": function () { youtube.search(message, content) },
		"twitch": function () { twitch.searchChannels(message, content) }
	};

	if (!message.author.bot) {
		if (message.content.startsWith("!")) {
			var content = message.content.slice(1);
			console.log("Received message: " + content);
			if (content.toLowerCase() === 'ping') {
				message.channel.send('pong');
			} else {
				var command = content.slice(0, content.indexOf(' '));
				if (commands[command]) {
					content = content.slice(command.length + 1);
					commands[command]();
				}
			}
		}
	}
});

function loadApiKeysFromProcess() {
	apiKeys.discord = process.env.discord;
	apiKeys.riot = process.env.riot;
	apiKeys.google = process.env.google;
	apiKeys.twitchId = process.env.twitchId;

	apiKeys.startBot = process.env.startBot;
}

$.startBot = function () {
	loadApiKeysFromProcess();
	if (apiKeys.startBot == "true") {
		client.login(apiKeys.discord);
	}
}