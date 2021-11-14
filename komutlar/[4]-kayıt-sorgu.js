const Discord = require('discord.js')
const db = require('quick.db')
const settings = require('../managment/settings.json')

exports.run = async (client, message, args) => {

   if(!message.member.roles.cache.some(r => ["822541964250972211", "822541860546674757"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
    return message.reply("<:667_red:810154774372155412> bu komutu sadece **CEO,FOUNDER** rolündeki kişiler kullanabilir.")

 let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
 
if(!kullanıcı) {

let erkek = db.fetch(`yetkili.${message.author.id}.erkek`);
let kadın = db.fetch(`yetkili.${message.author.id}.kadin`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(erkek === null) erkek = "0"  
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`<a:black6:842708048447275018> Toplam **Kayıtların:** \`${kayıtlar}\`
<a:black6:842708048447275018> Toplam **Erkek Kayıtların:** \`${erkek}\`
<a:black6:842708048447275018> Toplam **Kadın Kayıtların:** \`${kadın}\``)
.setColor(settings.renk.mavi)
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let kadın1 = db.fetch(`yetkili.${kullanıcı.id}.kadin`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(erkek1 === null) erkek1 = "0"  
if(erkek1 === undefined) erkek1 = "0"
if(kadın1 === null) kadın1 = "0"
if(kadın1 === undefined) kadın1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setThumbnail(kullanıcı.user.avatarURL({ dynamic: true})) 
.setAuthor(`${kullanıcı.user.username}`)
.setDescription(`\`˃\` <a:667_tag_667:810505579671060521> Toplam **Kayıtların:** \`${kayıtlar1}\`
\`˃\` <a:667_tag_667:810505579671060521> Toplam **Erkek Kayıtların:** \`${erkek1}\`
\`˃\` <a:667_tag_667:810505579671060521> Toplam **Kadın Kayıtların:** \`${kadın1}\``)
.setColor(settings.renk.special)
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıtlarım", "kayıtlar", "kayıt-kontrol", "kstat"],
    permLvl: 0,
}
  
exports.help = {  
  name: "kayıt"
}