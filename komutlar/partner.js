const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {


message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL({dynamic: true})).setFooter(`${client.user.username} seni takip ediyor.`).setDescription(` Botumuza Destek Olan Partnerlerimiz

1. Peditus Bot List
Sunucu Davet Link : https://discord.gg/DjC8eY5UpS

2. Avonix Botlist
Sunucu Davet Linki : https://discord.gg/kUg5ykQ7mB

3. BreedCrat Minecraft Sunucusu
Sunucu Davet Linki : https://discord.gg/EpW2tRAYTq

Sponsorlarımız : 

YAKINDA

Youtube Bilgi:
Yeni Video : https://www.youtube.com/watch?v=Lyj2BS3zIho

`));


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardımcı"],
  permLevel: 0
}

exports.help = {
  name: 'partnerler'
};