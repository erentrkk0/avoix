const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let lrowsveri = await db.fetch(`rol1_${message.guild.id}`);
  let lrowsveri2 = await db.fetch(`rol2_${message.guild.id}`);
  let e3 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol = message.mentions.roles.first();
  if (!rol) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`L�tfen silinecek r�tbenin rol�n� etiketleyiniz!`)
      .setColor("RED")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);
    return;
  }
  if (rol.id === lrowsveri2) {
    const Lrows = new Discord.MessageEmbed()
      .setDescription(
        `Basariyla r�tbeler arasinda **${
          message.guild.roles.cache.get(lrowsveri2).name
        }** rol�ne sahip r�tbe silindi!`
      )
    .setColor("GREEN")
  .setAuthor(`Basarili`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(Lrows);

    if (!lrowsveri) {
      await db.delete(`rol1_${message.guild.id}`);
      await db.delete(`roldavet1_${message.guild.id}`);
    } else {
      await db.set(`rol1_${message.guild.id}`, lrowsveri2);
      await db.set(`roldavet1_${message.guild.id}`, e3);
      await db.delete(`rol2_${message.guild.id}`);
      await db.delete(`roldavet2_${message.guild.id}`);
      return;
    }
  } else if (rol.id === lrowsveri2) {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Basariyla r�tbeler arasinda **${
          message.guild.roles.get(lrowsveri2).name
        }** rol�ne sahip r�tbe silindi!`
      )
    .setColor("GREEN")
  .setAuthor(`Basarili`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);

    await db.delete(`rol2_${message.guild.id}`);
    await db.delete(`roldavet2_${message.guild.id}`);
    return;
  } else {
    const kinstas = new Discord.MessageEmbed()
      .setDescription(`R�tbeler arasinda b�yle bir r�tbe bulamadim!`)
      .setColor("GREEN")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(kinstas);
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rutbesil'],
  permLevel: 2
};
exports.help = {
  name: "rutbe-sil",
  description: "r�tbe-sil",
  usage: "rutbe-sil"
};
