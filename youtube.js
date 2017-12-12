const apiKeys = require('./apiKeys.js');
const request = require('request');
var search = require('youtube-search');
const Discord = require('discord.js');
const $ = module.exports;

var message = null;
var youtubeVideo = null;

class YouTubeVideo {
    constructor(title, url, channel, thumbnail) {
        this.title = title;
        this.url = url;
        this.channel = channel;
        this.thumbnail = thumbnail;

        console.log("Created YouTubeVideo: " + title + " (" + url + ")");
    }
}

$.search = function (messageObject, searchInput) {
    message = messageObject;
    console.log("Searching YouTube for: " + searchInput);
    var searchOptions = {
        maxResults: 1,
        key: apiKeys.google
    }
    search(searchInput, searchOptions, function (err, results) {
        if (err) {
            console.log("Something went wrong!\n" + err);
            sendMessage("Something went wrong!");
        } else {
            var video = results[0];
            youtubeVideo = new YouTubeVideo(video.title, video.link, video.channelTitle, video.thumbnails.high.url);
            sendEmbeddedMessage();
        }
    });
}

function sendEmbeddedMessage() {
    var embedFields = [];
    embedFields.push({
        name: "Channel Name",
        value: youtubeVideo.channel,
        inline: true
    })
    embedFields.push({
        name: "Video URL",
        value: youtubeVideo.url,
        inline: true
    })
    var embedData = {
        author: {
            name: youtubeVideo.title.toUpperCase(),
            icon_url: "https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697037-youtube-512.png"
        },
        color: 0xff0000,
        thumbnail: {
            url: youtubeVideo.thumbnail
        },
        description: "------------------------------",
        fields: embedFields,
        footer: {
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
            text: "I am a bot, beep boop."
        },
    };
    embedData.timestamp = new Date();
    var data = new Discord.RichEmbed(embedData);
    sendMessage(data);
}

function sendMessage(reply) {
    console.log("(" + new Date() + ") Sending message: " + reply);
    message.channel.send(reply);
}