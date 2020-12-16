const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Avonix Sunucu Tema.")
.setTitle("<a:rocket:742698148329291826> Avonix'in sunucu tema sistemi! <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:751090021859196968> **a!j4j-tema** = __Hazır join 4 join sunucu teması yollar.__ \n <a:rocket:751089592245158030> **a!public-tema** = __Hazır karışık public sunucu teması yollar.__ \n <a:rocket:751089594694631465> **a!oyun-tema** = __Hazır oyun sunucu teması yollar.__ \n <a:rocket:742698148329291826> **a!gif-tema** = __Hazır gif share sunucu teması yollar.__ \n <a:rocket:742698148329291826> **a!sunucu-kur** = __Klasik oyun & sohbet sunucusu kurar.__ ")
.setImage("https://cdn.discordapp.com/attachments/761314429589258315/762047392651411487/erentr1.jpg")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["sunucu-tema-sistem"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'sunucu-tema',
  category: 'kullanıcı',
  description: 'Sunucu Menüsü.',
   usage:'sunucu-tema'
}