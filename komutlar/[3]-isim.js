const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const settings = require('../managment/settings.json')
exports.run = async (client, message, args) => {
if(!message.member.roles.cache.get(settings.roller.teyitcirol) && !message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`:667_red: Bu komutu **kullanabilmek** için <@&${settings.roller.teyitcirol}> yetkisine sahip olmalısın.`)
.setColor(settings.renk.kirmizi))
.then(x => x.delete({ timeout: 6500 }));
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let Name = args[1]
let Age = args[2]
if(!member) return message.channel.send(new MessageEmbed().setDescription(`<a:Red:851174182859178015> Geçerli bir **kullanıcı/ID** belirtmelisin.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
const Tagisim = `${Name}`;
const malmusnibibotyapcan = `${member.user.username.includes(settings.taglar.servertag) ? settings.taglar.servertag : settings.taglar.untag}`;
member.setNickname(`• ${Tagisim} spêct `)
message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:onay:843945384023687229> ${member} üyesinin ismi \`${Tagisim} ${malmusnibibotyapcan}\` olarak **değiştirildi** ${settings.durumlar.dogru}`)


.setColor(settings.renk.mavi))}


exports.conf = {enabled: true, guildOnly: true, aliases: ["i"]};
exports.help = {name: 'isim'}; 