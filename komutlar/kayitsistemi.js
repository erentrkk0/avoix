const Discord = require('discord.js');

exports.run = (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL({dynamic: true})).setColor('#f583fa')
.setDescription(`${client.user} **Kayıt sistemi:
Tek komut ile kayıt ve isim yapabilirsin.
Rol sıfırlamak yerine yeniden etiketle!**

>  **a!erkek-rol [@rolEtiket]**
>  **a!kadın-rol [@rolEtiket]**
>  **a!yetkili-rol [@rolEtiket]**
>  **a!kayıtsız-rol [@rolEtiket]**
>  **a!yetkili-rol-al [@rolEtiket]**
>  **a!yetkili-rol-ver [@rolEtiket]**
>  **a!kayıt-kanal [#kanaletiket]**

a!e, a!E, a!erkek, a!k, a!kadın, a!K
**Örnek kullanım:** \`a!e @Etiket\` veya \`a!e @Etiket Eren\`

\`\`\`a!ototag TAG\`\`\``));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistem'
};