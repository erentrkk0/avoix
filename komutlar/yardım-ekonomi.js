const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const data = require('quick.db')
const cryptoconfig = require('../ayarlar.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://media.discordapp.net/attachments/781626350364131352/785164861708697640/standard_2.gif`

exports.run = async(client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Ekonomi Sistemi Yardım Menüsü`)
 .setDescription(`
:dollar: **${WestraPrefix}bilgiler** \n-> Kendinizin Ekonomi Bilgilerinizi Gösterir.
:dollar: **${WestraPrefix}bakiye** \n-> Kendi Bakiyenizi Öğrenirsiniz.
:dollar: **${WestraPrefix}günlükpara** \n-> Komutu Kullanan Kişiye Random Bir Şekilde Günlük Para Verir.
:dollar: **${WestraPrefix}hesap-oluştur** \n-> Ekonomide Yer Almak İçin Hesap Oluşturursunuz.
:dollar: **${WestraPrefix}kasaaç** \n-> Para Kazanmak İçin Kasa Açarsınız.
:dollar: **${WestraPrefix}kasabilgi** \n-> Kasa Hakkında Bilgi Verir.
:dollar: **${WestraPrefix}kasalar** \n-> Bütün Kasaları Görürsünüz.
:dollar: **${WestraPrefix}çalış** \n-> Çalışıp Para Kazanırsınız.
:dollar: **${WestraPrefix}kumar** \n-> Kumar Oynarsınız Dikkat.
:dollar: **${WestraPrefix}rulet** \n-> Rulet Oynarsınız.
:dollar: **${WestraPrefix}liderlik** \n-> Sunucudaki Kayıtlı Para Liderliğine Bakarsınız.
:dollar: **${WestraPrefix}transfer** \n-> Kendi Paranızdan Bir Başkasına Para Gönderirsiniz.

`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["economysystem"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ekonomisistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};