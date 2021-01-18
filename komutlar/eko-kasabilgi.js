const Discord = require('discord.js');
const data = require('quick.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
		  let dil = await data.get(`language_${message.guild.id}`)
if(dil === 'tr') {	
  const kasaid = args[0];
  const kasasayisi = kasalar.length
  const kasaidembeds = new Discord.MessageEmbed()
  .setTitle(`Bir kasa İD si girmelisin!`)
  .setFooter(`Kasa listesine bakmak için: ${client.ekoayarlar.botunuzunprefixi}kasalar`)
  .setColor(client.ekoayarlar.renk)
  if(!kasaid) return message.channel.send(kasaidembeds)
  if(kasaid > kasasayisi) return message.channel.send(kasaidembeds)
  if(isNaN(kasaid)) return message.channel.send(kasaidembeds)
  
  const kasalarfilter = kasalar.filter(x => x.kasaid == kasaid).map(x => `Kasa İsmi: **${x.isim}** Kasa Fiyatı: **${x.fiyat}** Kasa Açıklaması: **${x.açıklama}**`).join('\n ')
  const icindekiler = require(`.././kasa${kasaid}`)
  const kasalariçindekilerfilter = icindekiler.map(x => x).join(' ')
  const embed = new Discord.MessageEmbed()
  .addField(`Kasa Bilgisi (İD: ${kasaid})`, `${kasalarfilter}`)
  .addField(`İçindekiler;`, `${kasalariçindekilerfilter}`)
  .setFooter(`Kasa listesine bakmak için: ${client.ekoayarlar.botunuzunprefixi}kasalar`)
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
    aliases: ['kasabilgi', 'kasabilgisi', 'kasa'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasa-bilgi',
    description: 'Kasalar hakkında bilgi alırsınız.',
    usage: 'kasa-bilgi <Kasa-İD>'
}