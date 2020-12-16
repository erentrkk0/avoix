const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazik ki bu komutu kullanmaya yetkin yok.```")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     
      .setColor("RED");

    message.channel.send(embed);
    return;
  }

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)

  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Davet kanali zaten ayarlanmamis!")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     
        .setColor("RED")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const Lrows = new Discord.MessageEmbed()
    .setColor("#0BF3B7")
  .setAuthor(`Basarili`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`Davet kanali basariyla sifirlandi!`);
  message.channel.send(Lrows);
return
  
};

module.exports.conf = {
  aliases: ["davetkanalsifirla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-sifirla",
  description: "davet-kanal-sifirla",
  usage: "davet-kanal-sifirla"
};
