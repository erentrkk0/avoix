const Discord = require('discord.js');
const data = require('quick.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  		  let dil = await data.get(`language_${message.guild.id}`)
if(dil === 'tr') {
  const kasalarfilter = kasalar.filter(x => x.kasaid).map(x => `Kasa İsmi: **${x.isim}** Kasa fiyatı: **${x.fiyat}** İD: **${x.kasaid}**`).join('\n ')
  const embed = new Discord.MessageEmbed()
  .addField(`Kasa Listesi ${client.ekoayarlar.botismi}`, `${kasalarfilter}`)
  .setFooter(`Bir kasa hakkında bilgi almak için: ${client.ekoayarlar.botunuzunprefixi}kasa-bilgi <kasaid>`)
  .setColor(client.ekoayarlar.renk)
  message.channel.send(embed)
  

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
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasalar',
    description: 'Kasaları listeler.',
    usage: 'kasalar'
}