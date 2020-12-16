const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {


message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL({dynamic: true})).setFooter(`${client.user.username} seni takip ediyor.`).setDescription(`** \`Davet Yardim\` \`Menusu\`


__Diger korumalar;__
\`a!davet-sifirla\`  \`Etiketlenen Kisinin Davetlerini Sifirlar\`
\`a!davet-sil\` & \`Etiketlenen Kisinin Davetlerini Sifirlar.\`
\`a!davet-stokla\` & \`Davetlerinizi Stoklar.\`
\`a!davet-ekle\` \`Etiketlenen Kisiye Davet Ekler.\`
\`a!davet-kanal \` & \`Davet Kanalini Belirler.\`
\`a!davet-kanal-sifirla\` & \`Davet Kanalini Sifirlar.\`
\`a!davetlerim\` & \`Davetlerinizi Yollar\`
\`a!davet-olustur\` & \`Size Ozel Davet Kodu Olusturur\`
\`a!rutbe-sil\` & \`Ekli Olan Rutbeyi Siler\`
\`a!rutbe-ekle\` & \`Rutbe Ekler\`
\`a!rutbe-liste\` & \`Eklenen Rutbeleri Gösterir\`

**`));


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davetsistem'
};