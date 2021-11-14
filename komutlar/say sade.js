const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    if(!message.member.roles.cache.some(r => ["893834369943347200", "892427994671480862","891756044286590977","891756077790679101"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
    return message.reply("<a:0667_carpi:894082495711174666> bu komutu sadece **CEO,FOUNDER** rolündeki kişiler kullanabilir.")


var sesli = 0;
message.guild.channels.cache.filter(t => t.type === "voice").forEach(a => {
sesli = sesli + a.members.size
})
    const embed = new Discord.MessageEmbed()    
       .setColor('RED')
	   .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
       .setDescription(`
<a:redhac5:842707974974603274>  **Sunucuda toplam \`${message.guild.memberCount}\` üye bulunmakta.**
<a:redhac5:842707974974603274>  **Sunucuda \`${message.guild.members.cache.filter(u=> u.presence.status !== 'offline').size}\` aktif üye bulunmakta.**
<a:redhac5:842707974974603274>  **Sunucuda toplam tagımızı alan \`${message.guild.members.cache.filter(m => m.user.username.includes('⁶⁶⁷') || m.user.username.includes('spéct') ||  m.user.username.includes('spect') || m.user.username.toLowerCase().includes('spêct')|| m.user.username.toLowerCase().includes('underground')|| m.user.username.toLowerCase().includes('Spéct')|| m.user.username.toLowerCase().includes('SPECT')|| m.user.username.toLowerCase().includes('SPÊCT')|| m.user.username.toLowerCase().includes('″')|| m.user.discriminator === '0667').size}\` üye bulunmakta.**
<a:redhac5:842707974974603274>  **Sunucuda ses kanallarında \`${sesli}\` üye bulunmakta.** `)     
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL({dynamic:true}));
     message.channel.send(embed).then(x=> x.delete({timeout : 6500}),setTimeout(function(){message.react("846081686345351207")},6500))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
}