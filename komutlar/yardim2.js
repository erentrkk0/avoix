const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Avonix Yardım.")
.setTitle("<a:rocket:742698148329291826> Avonix'in yardım menüsüne hoşgeldin! <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:742698148329291826> **a!korumalar ** = __Korumaları Görüntülersiniz.__ \n <a:rocket:742698148329291826> **a!sunucu-tema ** = __Sunucu Temalarını Görüntülersiniz.__ \n <a:rocket:742698148329291826> **a!ban-sistem ** = __Ban Sistemini Görüntülersiniz.__ \n <a:rocket:742698148329291826> **a!sayaç ** = __Sayaç Sistemini Görüntülersiniz.__ \n <a:rocket:742698148329291826> **a!otorol ** = __Otorol Sistemini Görüntülersiniz.__ \n <a:rocket:750065080741134407> **a!ototag** = Sunucuya Giren Üyelere Ototag Verir<a:rocket:749525084586115153>")    
.setImage("https://cdn.discordapp.com/attachments/781626350364131352/785164861708697640/standard_2.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help2","y2"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'yardım2'
}
