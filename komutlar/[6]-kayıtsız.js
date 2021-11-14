const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const settings = require('../managment/settings.json')
exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:red:843945381007589377> Bu komutu **kullanabilmek** için **Yönetici** yetkisine sahip olmalısın.`)
.setColor(settings.renk.kirmizi))

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new MessageEmbed().setDescription(`<a:red:843945381007589377> **geçerli bir kullanıcıyı** etiketlemelisin.`).setColor("#1f232d")).then(msg => msg.delete({timeout: 5000}))

if(message.member.roles.highest.position <= member.roles.highest.position) return 
if(member.manageable)  member.setNickname(member.user.username).catch();
let digerroller = [];
member.roles.cache.filter(r => r.id).map(r => {digerroller.push(r.id)})
await member.roles.remove(digerroller)
member.roles.add(settings.roller.kayıtsızrol)
message.channel.send(new MessageEmbed().setDescription(`<a:onay:843945384023687229> ${member} adlı üye ${message.author} **tarafından** kayıtsıza atıldı.`).setColor('#1f232d')).then(msg => msg.delete({timeout: 4000}))

message.react(settings.durumlar.dogru)
}  

exports.conf = { enabled: true, guildOnly: true , aliases: ["kayıtsız", "unregsiter"]}

exports.help = { name: "kayıtsız"}