const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Avonix Yardım.")
.setTitle("<a:rocket:742698148329291826> Avonix'in yardım menüsüne hoşgeldin! <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:751090021859196968> **a!eğlence** = __Eğlence komutlarını görüntülersiniz.__  \n <a:rocket:751089592245158030> **a!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__  \n <a:rocket:751089594694631465> **a!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__  \n <a:rocket:742698148329291826> **a!logo** = __Logo komutlarını görüntülersiniz.__  \n <a:rocket:742698148329291826> **a!kayıt-sistem **BETA** ** = __Kayıt Sistemini Görüntülersiniz.__  \n <a:rocket:742698148329291826> **a!yardım2** = __Yardım2 Komutlarını Görürsünüz.__")
.setImage("https://cdn.discordapp.com/attachments/781626350364131352/785164861708697640/standard_2.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}