const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("892617298299457536") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:0667_red_667:891732556087705631> Komutu kullanacak yetkin yok.').setColor("Black"));
  let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`<a:0667_red_667:891732556087705631> Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`<a:0667_red_667:891732556087705631> Bir İsim Yazınız`).setColor("RANDOM")).then(m => m.delete({timeout: 5000}));
await member.setNickname(`• ${isim} spêct`)
  member.roles.add("891725286910095472"); 
  member.roles.add("893812645696790589"); 
  member.roles.add("891725300533174352")
  member.roles.remove("891725749629894727");
  await member.setNickname(`• ${isim} spêct`)
  member.roles.add("891725286910095472"); 
  member.roles.add("893812645696790589"); 
  member.roles.add("891725300533174352")
  member.roles.remove("891725749629894727");
  await member.setNickname(`• ${isim} spêct`)
  member.roles.add("891725286910095472"); 
  member.roles.add("893812645696790589"); 
  member.roles.add("891725300533174352")
  member.roles.remove("891725749629894727");
    const kanal = message.guild.channels.cache.find(c => c.id == "891782079463960606")
   kanal.send(`<@!${member.id}> Sunucumuza Hoşgeldin Seninle Beraber \`${member.guild.memberCount}\` Kişi Olduk.`).then(m => m.delete({timeout: 20000}));
  let embed = new Discord.MessageEmbed() 
  .setColor("RANDOM")
  .setTimestamp()
  .addField(`Kayıt İşlemi Başarılı`, `<@!${member.id}> Kişisini kaydettim ve İsmini \n\`• ${isim} spêct\` Olarak Düzenledim.`) 
  .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}` ,message.author.avatarURL({dynamic: true }))
  return message.channel.send(embed).then(m => m.delete({timeout: 20000}));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e" , "erkek"],
  permLevel: 0
}
exports.help = {
  name: 'Erkek',

}
