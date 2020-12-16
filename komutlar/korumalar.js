const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {


message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL({dynamic: true})).setFooter(`${client.user.username} seni takip ediyor.`).setDescription(`**⭐ \`v!koruma\` && \`v!koruma-kapat\`
6 adet sistemi sunucunuz için aktif edersin.


__Diğer korumalar;__
\`a!küfüraç\` & \`a!küfürkapat\`
\`a!linkaç\` & \`a!linkkapat\`
\`a!eh-engel aç\` & \`a!eh-engel kapat\`
\`a!capslock\` \`Yazdığınız Zaman Ya Kapanır Ya da Açılır\`
\`a!otobotsiliciaç\` & \`a!otobotsilicikapat\`
\`a!anti-raid aç\` & \`a!anti-raid kapat\`

**`));


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'korumalar'
};