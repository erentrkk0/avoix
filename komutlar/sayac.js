const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, ) => {
  
  let sayi = args[0];
  let kanal = message.mentions.channels.first();
  
  if (!sayi) return message.channel.send(':negative_squared_cross_mark: **| Lütfen Bir Sayı Belirtiniz.**')
  if (!kanal) return message.channel.send(':negative_squared_cross_mark: **| Lütfen Kanal Belirtiniz.**')
  
  db.set(`sayac_${message.guild.id}`, sayi);
  db.set(`sayacK_${message.guild.id}`, kanal.id);
  

  message.channel.send
new Discord.MessageEmbed()
                        (`
                        **¦-======= Avonix Sayaç =======¦
                          ¦> :rocket: Sayaç Aktif Edildi.
                          ¦> :rocket: **${args[0]}** Olarak Güncelledim!
                          ¦> :rocket: Kayıt Kanalını **${kanal}** Olarak Güncelledim!
                          ¦> :rocket: Belirdeğiniz Sayı Kadar Kişi Olmaya Son **NaN** Kişi Kaldı.
                          ¦======= Avonix Sayaç =======-¦`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaç-ayarla"],
  permLevel: 3
}
exports.help = {
  name: "sayaç",
  description: "Sayaç ayarlama komutudur.",
  usage: "sayaç <sayi> <#kanal>"
}