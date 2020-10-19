const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('0xf0cdcd')
      .setTitle('**Buddies Register Yardım Paneli**')
    .addField('__**Erkek**__', `  \`${prefix}erkek @etiket İsim Yaş\``) 
    .addField('__**Kadın**__', `  \`${prefix}kadın @etiket İsim Yaş\``) 
    message.channel.send(embedyardim).catch()
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};
  
exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};  