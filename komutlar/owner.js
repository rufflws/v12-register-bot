const Discord = require('discord.js');
const ownerRoleID = "891706535166771240"

exports.run = (client, message, args) => {
if (!["710622150071025704","365964532977369088","791690874978435143","797802767636496414"].includes(message.author.id)) return
let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!user) return message.channel.send("Rolü verip/almak istediğin kullanıcıyı belirt ve tekrar dene!")
if(!user.roles.cache.has(ownerRoleID)) {
message.channel.send(`${user} kişisine <@&${ownerRoleID}> rolü alındı.`) 
user.roles.add(ownerRoleID)
} else{
message.channel.send(`${user} kişisine <@&${ownerRoleID}> rolü alındı.`) 
user.roles.remove(ownerRoleID)
}
}



exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["owner"],
permLevel: 0
};

exports.help = {
name: 'name',
description: 'a',
usage: ''
}; 