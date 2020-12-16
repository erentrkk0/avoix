const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()

if(!rol) return message.channel.send('Lütfen Bir Rol Etiketle. Örnek Kullanım : ``otorol @rol #kanal``')
if(!kanal) return message.channel.send('Lütfen Bir Kanal Etiketle. Örnek Kullanım : ``otorol @rol #kanal``')
  
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
  
const embed = new Discord.MessageEmbed()

.setTitle('Avonix - Otorol')

.setColor("GREEN")

.setDescription(`Otorol Rolü **@${rol.name}** Olarak, Bildirimin Gideceği Kanal İse **#${kanal.name}** Olarak Ayarlandı. \n \nn **Not: Botun Rolü En Üstte Olmaz İse Rol Vermez.**`)

message.channel.send(embed)
};
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
exports.help = {
 name: 'otorol',
};