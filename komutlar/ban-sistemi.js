const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Avonix Ban Sistemi.")
.setTitle("<a:rocket:742698148329291826> Avonix'in Ban menüsüne hoşgeldin! <a:rocket:742698148329291826>")
 .setTimestamp()
.setDescription("<a:rocket:751090021859196968> **a!ban-log [@kanalEtiket]** = __Belirtilen kanala yasaklanma bilgisini gönderir.__ \n <a:rocket:751089592245158030> **a!ban-yetki-role** = __Belirtilen rolü olan kişi sadece yasaklama yapabilir.__ \n <a:rocket:751089594694631465> **a!ban-yetki-role-kapat** = __Yasaklama yetkili rolünü kapatır.__ \n <a:rocket:742698148329291826> **a!ban-kanal-kapat** = __Ban log kanalını sıfırlar.__ \n <a:rocket:742698148329291826> **a!ban @üyeetiketi açıklama** = __Belirtilen Kullanıcıyı Banlar.__ \n <a:rocket:742698148329291826> **a!unban [Kullanıcı ID]** = __Sunucunuzdan yasaklı kullanıcının yasağını kaldırır.__ \n <a:rocket:742698148329291826> **a!forceban** = Birisine id ban atarsınız.__")
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
  name: 'ban-sistem',
  category: 'kullanıcı',
  description: 'Ban Sistem Menüsü.',
   usage:'ban-sistem'
}