const apiKeys = require('./apiKeys.js');
const league = require('./league.js');
const youtube = require('./youtube.js');
const twitch = require('./twitch.js');
const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();
const botName = "alfred";
const $ = module.exports;

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

function loadApiKeysFromProcess() {
	apiKeys.discord = process.env.discord;
	apiKeys.riot = process.env.riot;
	apiKeys.google = process.env.google;
	apiKeys.twitchId = process.env.twitchId;

	apiKeys.startBot = process.env.startBot;
}

$.startBot = function() {
    loadApiKeysFromProcess();
    if (apiKeys.startBot == "true") {
        client.login(apiKeys.discord);
    }
}