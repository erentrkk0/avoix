const data = require('quick.db')
var ayarlar = require('../cryptoconfig.json')
const ms = require('parse-ms')
const Discord = require('discord.js')
    
exports.run = async (client, message, args, config) => {
     		  let dil = await data.get(`language_${message.guild.id}`)
if(dil === 'tr') {
    let timeout = 604800000
    let amount = 1000

    let weekly = await db.fetch(`bakiyecdare-${message.author.id}`);
  
         if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));
           
      let ac = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setDescription(`Haftalık Ödülü Zaten Almışsın ! \n **${time.days} Gün ${time.hours} Saat ${time.minutes} Dakika ${time.seconds} Saniye** Tekrardan Sonra Alabilirsin.!`)
    message.channel.send(ac)
    } else {
    let embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`Haftalık Ödül Alındı \n **${amount}** Para`)

    message.channel.send(embed)
    db.add(`bakiyecdare-${message.guild.id}.${message.author.id}`,amount)
    db.set(`bakiyecdare-${message.author.id}`, Date.now())
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
  aliases: ["weekly"], 
  permLevel: 0 
};

exports.help = {
  name: 'haftalık'
};