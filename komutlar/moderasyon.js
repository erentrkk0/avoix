const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Avonix Moderasyon Menüsü")
.setTitle("<a:rocket:742698148329291826> Avonix Moderasyon Komutları <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:750065080741134407> **a!sil** = Yazdığınız miktarda mesajı siler. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!kick** = Etiketlediğiniz kişiyi atarsınız. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!duyuru** = Bota duyuru yaptırırsınız. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!sa-as** = Bot biri sa dedimi cevap verir. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!üyedurum** = Üyelerin durumlarını görürsün. <a:rocket:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/781626350364131352/785164861708697640/standard_2.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}