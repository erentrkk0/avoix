const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args, tools) => {
  let kisi;
  if (message.mentions.members.first()) {
    kisi = message.mentions.members.first();
  } else {
    kisi = message.author;
  }

  let bilgi = await db.fetch(`davet_${kisi.id}_${message.guild.id}`);
  let sayi2;
  if (!bilgi) {
    sayi2 = 0;
  } else {
    sayi2 = await db.fetch(`davet_${kisi.id}_${message.guild.id}`);
  }
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  if (!veri) {
    const embed = new Discord.MessageEmbed()
      .addField(`Davetlerin Sahibi`, `<@` + kisi.id + `>`, true)
      .addField(`Total Davet:`, sayi2, true)
    .setColor("GREEN")
  .setAuthor(`Davet istatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
    message.channel.send(embed);
  }
  if (message.member.roles.has(veri2)) {
    const embed = new Discord.MessageEmbed()
      .addField(`Davetlerin Sahibi`, `<@` + kisi.id + `>`, true)
      .addField(`Total Davet:`, sayi2, true)
    .setColor("GREEN")
  .setAuthor(`Davet istatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()   
    message.channel.send(embed);
    return;
  }
  if (!message.member.roles.has(veri)) {
    const embed = new Discord.MessageEmbed()
      .addField(`Davetlerin Sahibi`, `<@` + kisi.id + `>`, true)
      .addField(`Total Davet:`, sayi2, true)
    .setColor("GREEN")
      .setDescription(
        `${message.guild.roles.get(veri).name} rolu için son ${-sayi2 -
          -veri12} davet!`
      )
      .setAuthor(`Davet istatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()   
    message.channel.send(embed);
    return;
  }
  if (message.member.roles.has(veri)) {
    if (!veri2) {
      const Lrows = new Discord.MessageEmbed()
        .addField(`Davetlerin Sahibi`, `<@` + kisi.id + `>`, true)
        .addField(`Total Davet:`, sayi2, true)
    .setColor("GREEN")
  .setAuthor(`Davet istatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()   
      message.channel.send(Lrows);
      return;
    }
    if (veri2) {
      const kinsta = new Discord.MessageEmbed()
        .addField(`Davetlerin Sahibi`, `<@` + kisi.id + `>`, true)
        .addField(`Total Davet:`, sayi2, true)
    .setColor("GREEN")
        .setDescription(
          `${message.guild.roles.get(veri2).name} rolu için son ${-sayi2 -
            -veri21} davet!`
        )
        .setAuthor(`Davet istatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()   
      message.channel.send(kinsta);
      return;
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["davetk", "davetlerim"],
  permLevel: 0
};

exports.help = {
  name: "davetler"
};
