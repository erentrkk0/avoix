const Discord = require('discord.js');//Fiber <3 LysteX
const data = require('quick.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
		  let dil = await data.get(`language_${message.guild.id}`)
if(dil === 'tr') {	
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`bakiyecdare-${message.author.id}`)
let cd = 1800000 //30 dk şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure))
      message.channel.send(`Bir daha çalışmak için biraz beklemen gerekli **${timeObj.hours} saat ${timeObj.minutes} dakika** sonra tekrar dene!`)
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `a?hesap-oluştur <isim>`")
        let gelcekpara = Math.round(Math.random() * 200)
        db.add(`bakiyecdare-${message.author.id}`, gelcekpara)
   
      message.channel.send('Çalışarak` '+gelcekpara +"` Para Kazandın !")
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }}
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
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çalış', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};