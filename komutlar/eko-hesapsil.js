const Discord = require('discord.js')
const data = require('quick.db');
var ayarlar = require('../cryptoconfig.json');



exports.run = async (client, message, args) => {
			  let dil = await data.get(`language_${message.guild.id}`)
if(dil === 'tr') {
if(message.author.id !== "477050335685509124") if(message.author.id !== "477050335685509124") return message.channel.send("hoop bilader sahip komutu bu");
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiyecdare-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiyecdare-${silinecekkllnc.id}`)
  db.delete(`hesapdurumcodare-${silinecekkllnc.id}`)
  db.delete(`hesapismiçodare-${silinecekkllnc.id}`)
  message.channel.send(`:+1:`)
}
if(dil === 'en') {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | COMING SOON`)
 .setDescription(`
**COMING SOON**.
`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sil'],
    permLevel: 0
}

exports.help = {
    name: 'hesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}