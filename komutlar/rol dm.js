const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(8)) return;
    let rol = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first()
    let msg = args.slice(1).join(' ')
    if (!rol) return;
    let uyeler = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).array()
    uyeler.forEach(async(member, index) => {
        setTimeout(async() => {
            await member.send(`${msg ? msg : "TOPLANTI BASLIYOR discord.gg/0667 !"}`).catch(err => message.channel.send(`${member} ${msg ? msg : "Lütfen seslere geçelim"}`))
        }, index * 1000)
    })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['roldm', 'roldm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'roldmm',
    kategori: 'roldm komudu'
  };