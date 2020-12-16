const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KiCK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazik ki bu komutu kullanmaya yetkin yok.```")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
      .setColor("RED");

    message.channel.send(embed);
    return;
  }

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lutfen bir kanal belirtiniz!")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
        .setColor("RED")
    );
  }
  const Lrows = new Discord.MessageEmbed()
    .setColor("#0BF3B7")
  .setAuthor(`Basarili`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`Davet kanali; ${kanal} olarak ayarlandi!`);
  message.channel.send(Lrows);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davetkanal"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
