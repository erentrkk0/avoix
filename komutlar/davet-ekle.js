const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KiCK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazik ki bu komutu kullanmaya yetkin yok.```")
      .setColor("RED")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
        .setDescription("Lutfen davet eklenecek kisiyi etiketleyiniz!")
        .setColor("RED")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
        .setDescription("Lutfen eklenecek davet sayisini giriniz.")
        .setColor("RED")
    );
  }
  const Lrows = new Discord.MessageEmbed()
    .setColor("GREEN")
  .setAuthor(`Basarili`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`${u} Adli sahsa; ${m} davet eklendi!`);
  message.channel.send(Lrows);

  db.add(`davet_${message.author.id}_${message.guild.id}`, +m);
};

module.exports.conf = {
  aliases: ["davetekle"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};
