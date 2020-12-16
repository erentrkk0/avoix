const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
if(!args[0]) {
message.delete()
return message.channel.send(`Komutu düzgün kullanin: \`[Etiket/Rol] (kanal)\``).then(c => c.delete(10000)) }
  
if(args[0]) {

if(!args[1]) {
const ad = await data.fetch(`numara.${message.channel.id}`)
if(!message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
message.delete()
return message.channel.send(`Bu komutu bir bilet kanalinda kullanin.`).then(c => c.delete(5000)) } }
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin degil.`)
let mt = message.mentions.roles.first() || message.mentions.users.first()
if(!mt) {
message.delete()
return message.channel.send(`Komutu düzgün kullanin: \`[Etiket/Rol] (kanal)\``)  }
let mention = message.guild.roles.get(mt.id) || message.guild.members.get(mt.id)
if(!mention) {
message.delete()
return message.channel.send(`Komutu düzgün kullanin: \`[Etiket/Rol] (kanal)\``)  }  
  
if(args[1]) {  
  
if(message.mentions.channels.first()) {
  
let ch = message.mentions.channels.first()
const ad = await data.fetch(`numara.${message.channel.id}`)
if(!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {
message.delete()
return message.channel.send(`Bir bilet kanali degil.`).then(c => c.delete(5000)) }
const ann = await data.fetch(`asd.${message.guild.id}.${ch.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin degil.`)
ch.overwritePermissions(mt, { 'SEND_MESSAGES': null, 'READ_MESSAGES': null })
message.delete()
const emb = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`${mt}: ${ch} kanalindan kaldirildi.`)
return message.channel.send(emb) } }
  
message.channel.overwritePermissions(mt, { 'SEND_MESSAGES': null, 'READ_MESSAGES': null})
message.delete()
const emb = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`${mt}: ${message.channel} kanalindan kaldirildi.`)
return message.channel.send(emb)

}

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kaldir'],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};