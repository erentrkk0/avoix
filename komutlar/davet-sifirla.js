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
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lutfen daveti sifirlanacak kisiyi etiketleyiniz!")
        .setColor("RED")
  .setAuthor(`Hatali Giris`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
    );
  }

  const Lrows = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(
      `${u} Adli sahsin davetlerinin sifirlanmasini onayliyor musunuz?`
    )
  .setAuthor(`Onaylama istegi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan istendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(Lrows).then(async function(sentEmbed) {
    const emojiArray = ["?"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("islem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "?") {
        message.channel.send(
          `islem onaylandi! ${u} adli sahsin davetleri sifirlandi!`
        );

        db.delete(`davet_${message.author.id}_${message.guild.id}`);
      }
    });
  });
};

module.exports.conf = {
  aliases: ["davetsifirla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sifirla",
  description: "davet-sifirla",
  usage: "davet-sifirla"
};
