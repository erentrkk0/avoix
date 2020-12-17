const Discord = require('discord.js')
const moment = require("moment");
const db = require('quick.db')
const os = require("os");
const client = require("moment-duration-format");
exports.run = async (client, message, args) => {
  
let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setTitle(`Avonix İstatistik.`)
 .setDescription(`
            **Sahip Bilgileri**
           :rocket: isim Etiket ➤➤ **\`Eren Türk | Avonix#0038\`**
           :rocket: Ortak ➤➤ **\`Ortak Yok\`**
           :rocket: İD ➤➤ **\`454293207443046412\`**\n
           **Bot Sunucuları**
           :rocket: Sunucu Sayısı ➤➤ **\`${client.guilds.cache.size.toLocaleString()}/90\`**
           :rocket: Kullanıcı Sayısı ➤➤**\`${client.users.cache.size}/120000\`**
           :rocket: Kanal  sayısı ➤➤  **\`${client.channels.cache.size.toLocaleString()}\`\n**  
           **Versiyon Bilgileri**
           :rocket: DiscordJS ➤➤ **\`v${Discord.version}\`**
           :rocket: NodeJS ➤➤ **\`${process.version}\`**\n
           **Bot Kullanım bilgileri**
           :rocket: Kuruluş ➤➤ **\`${s}\`**
           :rocket: Ping ➤➤ **\`${client.ws.ping}ms\`**
           :rocket: Bit  ➤➤ **\`${os.arch()}\`**
           :rocket: İşletim Sistemi ➤➤ **\`${os.platform()}\`**
           :rocket: Çalışma Süresi ➤➤  **\`${uptime}\`**
           :rocket: Bellek Kullanımı ➤➤ **\`${bel}/1GB\`**
           :rocket: Toplam Bellek Miktarı ➤➤ **\`${bel2}/9GB\`**
           :rocket: Yüklü Modül sayısı ➤➤ **\`200+\`**
           :rocket: Komut Sayısı  ➤➤   **\`${client.commands.size}\`** 
           :rocket: CPU  \`\`\`fix\n➤➤ ${os.cpus().map((i) => `${i.model}`)[0]}\`\`\`
            **Bot ekstra bilgiler**
           :rocket: Ana Komut ➤➤ **\`a!yardım\` + \`a!yardım2\` + \`Yeni Komutlar\`** 
           :rocket: Veri Kaydı ➤➤ **\`quick.db\`**
           :rocket: quick.db Komut sayısı ➤➤ **\`18\`**
           :rocket: Suport server ➤➤ [Destek Sunucusu](https://discord.gg/t7kbYJ5)
`)          
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
.addField(`Linkler`,`[Lavet Linki](https://discord.com/oauth2/authorize?client_id=781194108885925948&scope=bot&permissions=8)`)
  message.channel.send(Embed)
};
 
exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};
 
exports.help = {
  name: 'i',
  description: 'Reklam Sistemini Akif Eder',
  usage: 'reklam-engelle'
};
