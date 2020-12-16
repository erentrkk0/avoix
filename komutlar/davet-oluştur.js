const Discord = require(`discord.js`)

exports.run = async (bot, message, args) => {
  try {
    let invite = await message.channel.createInvite({
      maxAge: args.age * 60,
      maxUses: args.uses
    });
      const Lrows = new Discord.MessageEmbed()
    .setColor("#0BF3B7")
        .setDescription(`Davet kodu basariyla olusturuldu! (https://discord.gg/${invite.code})`)
  .setAuthor(`Basarili`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafindan Istendi`, message.author.avatarURL)
  .setTimestamp()     
    return message.channel.send(Lrows).catch(e => {
return
    });
  }
  catch (e) {
return
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetolustur'],
  permLevel: 0
};

exports.help = {
  name: 'davet-olustur',
  description: 'davet-olustur',
  usage: 'davet-olustur'
};