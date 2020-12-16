const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Avonix Botu Kullanıcı Menüsü.")
.setTitle("<a:rocket:742698148329291826> Avonix Kullanıcı Komutları <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:750065080741134407> **a!avatar** = Avatarınıza bakarsınız. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!yetkilerim** = Yetkilerini görürsün. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!profil** = Profilini görürsün. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!sunucuresmi** = Sunucu resmini gösterir. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!ping** = Botun Pingine Bakarsın. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!id** = Birisinin id'sine Bakarsın. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!davet** = Beni Sunucuna Ekle. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!istatistik** = Bot istatistiklerini görürsünüz. <a:rocket:750065080741134407>")
.setImage("https://cdn.discordapp.com/attachments/781626350364131352/785164861708697640/standard_2.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'kullanıcı'
}