const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Avonix Eğlence Menüsü")
.setTitle("<a:rocket:742698148329291826> Avonix Eğlence Komutları <a:rocket:742698148329291826>")
 .setTimestamp() 
.setDescription("<a:rocket:750065080741134407> **a!kartopu** = Etiketlenen Kullanıcıya Kartopu Atar. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!token** = Tokenimi Öğrenmek İstemezmisin? <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!wasted** = Polis tarafından yakalanırsın. <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!atatürk** = Dene ve gör... (1881-1938) <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!kaçcm** = Kaç Cm Olduğunu Gösterir <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!kapaklaflar** = Rastgele Kapak Laf Söyler <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!sigarayak** = Efkarlandıysan Bi Cugara Çek <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!ping** = Botun Pingine Bakarsın <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!afk** = Birisi Sizi Etiketlediğinde Afk Sebebinizi Atar <a:rocket:749525084586115153> \n <a:rocket:750065080741134407> **a!corona** = Söylenen Ülke Koduna Göre Corona Bilgilerini Atar <a:rocket:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/781626350364131352/785164861708697640/standard_2.gif") 
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}