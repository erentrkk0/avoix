const Discord = require('discord.js')
const data = require('quick.db');
var ayarlar = require('../cryptoconfig.json');



exports.run = async (client, message, args) => {
		  let dil = await data.get(`language_${message.guild.id}`)
if(dil === 'tr') {	
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiyecdare-${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${kllanç.id}`)
  
  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(`Hesap İsmi: ${client.ekoayarlar.isimsiz}\n Hesap Bakiyesi: ${bakiye}\n Hesap Oluşturma Tarihi: Bilinmiyor`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`Hesap İsmi: ${hesapismi}\n Bakiye: ${bakiye}\n Hesap Oluşturma Tarihi: *${hesaptarihay}/ ${hesaptarihgün}/${hesaptarihyıl}* gününde hesabın oluşturuldu!`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
  }
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
    name: 'bilgiler',
    description: 'Bilgilerinizi gösterir.',
    usage: 'bilgiler <@kullanıcı>',
}