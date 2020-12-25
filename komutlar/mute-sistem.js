const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Avonix Mute Sistem.")
.setTitle("<a:rocket:742698148329291826> Avonix'in Mute menüsüne hoşgeldin! <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:751090021859196968> **a!mute [@üyeEtiket] 1m** = __Yazılı kanallarda mutelemek için kullanılır.__ \n <a:rocket:751089592245158030> **a!unmute [@üyeEtiket]** = __Yazılı kanaldan mute kaldırır.__ \n <a:rocket:742698148329291826> **a!mute-log-ayarla [#kanalEtiket]** = __Mute bilgilerinin yazılacağı kanalı etiketleyiniz.__ \n <a:rocket:742698148329291826> **a!mute-log sıfırla** = __Ayarlı olan mute kanalını sıfırlar.__")
.setImage("https://cdn.discordapp.com/attachments/761314429589258315/762047392651411487/erentr1.jpg")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'mute-sistem',
  category: 'kullanıcı',
  description: 'Mute Sistemi Menüsü.',
   usage:'mute-sistem'
}
