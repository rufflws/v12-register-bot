const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
const settings = require('./managment/settings.json')
var prefix = ayarlar.prefix;

const log = message => {console.log(`${message}`);};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
if (err) console.error(err);
log(`Toplam ${files.length} Destekçi Ve Komut Yükleniyor...`);
files.forEach(f => {
let props = require(`./komutlar/${f}`);
log(`BOT | ${props.help.name} Komutu Yüklendi.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {client.aliases.set(alias, props.help.name);});});});

client.reload = command => {return new Promise((resolve, reject) => {try {delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {if (cmd === command) client.aliases.delete(alias);});
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name);});resolve();} catch (e) {reject(e);}});};

client.load = command => {return new Promise((resolve, reject) => {try {let cmd = require(`./komutlar/${command}`);
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name);});resolve();} catch (e) {reject(e);}});};

client.unload = command => { return new Promise((resolve, reject) => { try {delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {if (cmd === command) client.aliases.delete(alias);});resolve();} catch (e) {reject(e);}});};



client.on("ready", async () => {
  let botVoiceChannel = client.channels.cache.get(ayarlar.botVoiceChannelID);
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

client.elevation = message => {
if (!message.guild) {return;}
let permlvl = 0;
if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
if (message.author.id === ayarlar.sahip) permlvl = 4; return permlvl;};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));});
client.on('error', e => {console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));});
client.login(ayarlar.token);

client.on("guildMemberAdd", member => {
member.roles.add(settings.roller.kayıtsızrol)
member.roles.add(settings.roller.çekiliskatılımcısı)
member.roles.add(settings.roller.etkinlikkatılımcısı)
member.roles.add(settings.roller.şeytan)
member.roles.add(settings.roller.haftanıns)
})

client.on("guildMemberAdd", member => {
  const { MessageEmbed } = require('discord.js')

    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:667_0:847858416038314054>`,
            '1': `<a:667_1:847858209150730250>`,
            '2': `<a:667_2:847858405346639872>`,
            '3': `<a:667_3:847858388632993822>`,
            '4': `<a:667_4:847858370034663485>`,
            '5': `<a:667_5:847858927055667212>`,
            '6': `<a:667_6:847858367288574042>`,
            '7': `<a:667_7:847858318831779861>`,
            '8': `<a:667_8:847858392264605747>`,
            '9': `<a:667_9:847858369602519051>`}[d];})}
    const kanal = member.guild.channels.cache.find(r => r.id === "891706559871205396");
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl]** DD **[Gün]** HH **[Saat]** mm **[Dakika,]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = `<a:red:843945381007589377>`
  if (kurulus > 1296000000) kontrol = `<a:onay:843945384023687229>`
    moment.locale("tr");
    kanal.send(`<a:spect:843936565579219016> <@`+ member + `> **#667'ye** **hoşgeldin!** Seninle birlikte **`+üyesayısı+`** kişi olduk!\n\n          <a:spect:843936565579219016> Hesabın \``+gecen+`\` **oluşturulmuş.** `+kontrol+`\n\n          <a:spect:843936565579219016> **Tagımızı** alarak bize destek olabilirsin! Sunucumuzun <#${settings.kanallar.kurallar}> kanalındaki **kuralları** okumayı unutmayınız.\n\n          <a:spect:843936565579219016> Kayıt olmak için <#795741219690119198> kanalına girerek **ses teyit** vermen gerekiyor.\n\n<a:spect:843936565579219016> **Etkinlik** ve **Çekilişlerimizden** haberdar olmak için <#812004241735811107> kanalından rollerini almayı **unutma!**`)})



/* Main */

client.on('ready', async() => {
// ---------------------------Buradan----------------------------------//
            const mapping = {
            " ": "",//sayı idleri koyabilirsiniz
            "0": "<a:sifir:894508803662438400>",
            "1": "<a:bir:894508796381130812>",
            "2": "<a:iki:894508803616284683>",
            "3": "<a:uc:894508803721138186>",
            "4": "<a:dort:894508803834396682>",
            "5": "<a:bes:894508803976994826>",
            "6": "<a:alti:894508804065083433>",
            "7": "<a:yedi:894508804576780308>",
            "8": "<a:sekiz:894508804539031552>",
            "9": "<a:dokuz:894508804392239134>",
        };
  var sunucuID = "834486813618864149";
  var kanalID = "891782079463960606";
  var toplamüye = client.guilds.cache.get(sunucuID).memberCount
  var online = client.guilds.cache.get(sunucuID).members.cache.filter(x => !x.user.bot && x.presence.status !== "offline").size
  var tag = client.guilds.cache.get(sunucuID).members.cache.filter(a => a.user.username.includes(tag)).size
  var emotoplamüye = `${toplamüye}`.split("").map(c => mapping[c] || c).join("")
  var emotag = `${tag}`.split("").map(c => mapping[c] || c).join("")
  var emoonline = `${online}`.split("").map(c => mapping[c] || c).join("")
  var yazilacaklar = [
    `**TOPLAM ÜYE:** ${emotoplamüye} | **AKTİF ÜYE:** ${emoonline}`];
  setInterval(async() => {
    let random = Math.floor(Math.random() * yazilacaklar.length);
    client.guilds.cache.get(sunucuID).channels.cache.get(kanalID).setTopic(`${yazilacaklar[random]}`)
  }, 1000 * 10); 
// ---------------------------Buraya kadar olan kısmı alıp ready.jsye atabilirsiniz----------------------------------//
});



          

   
