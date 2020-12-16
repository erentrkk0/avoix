const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Avonix Logo Menüsü")
.setTitle("<a:rocket:742698148329291826> Avonix Logo Komutları <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:750065080741134407> **a!dinamik** = Dinamik logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!altın** = Altın logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!banner** = Banner logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!basit** = Basit logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!elmas** = Elmas logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!sarı** = Sarı logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!neonmavi** = Neon mavi logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!kalın** = Kalın logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!anime** = Anime yazı tipinde logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!habbo** = Habbo yazı tipinde logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!arrow** = Ok işaretli logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!green** = Yeşil logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!alev** = Alevli logo oluşturur. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!red** = Kırmızı logo oluşturur. <a:rocket:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/781626350364131352/785164861708697640/standard_2.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}