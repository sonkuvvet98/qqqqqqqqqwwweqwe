const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------STRIGA ÇOK TATLI BİRİSİ BEN OLSAM VİDEOLARINA LİKE ATAR KANALINA ABONE OLUR VİDEOSUNA YORUM YAPARDIM BU ARADA---------------------------------\\





//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('756452404999749683'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('756452404999749683'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG








//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG

client.on("guildMemberAdd", member => {  
  const strigadiyorumlogdiyorum = "756454569780707328";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '<:ReddedilmiPng:758117928569667625> **__Bu Hesap Güvenilir Değil__**'
if (kurulus > 1296000000) kontrol = '<:OnaylanmPng:758117928431386684> **__Bu Hesap Güvenilir Gözüküyor__**'
  moment.locale("tr");
  let strigalog = client.channels.get(strigadiyorumlogdiyorum);
  const embed = new Discord.RichEmbed()
  .setColor("0xd8d8d8")
  .setTitle(`**Buddies**`)
.setDescription("<a:hacc:767663776005881876> • **Hoşgeldin!** " + member + " **Seninle \`" + member.guild.memberCount + "\` Kişiyiz.**  \n \n<a:hacc:767663776005881876> • **Müsait olduğunda Buddies Register Odalarından Birine Geçip Kaydını Yaptırabilirsin.** \n \n<a:hacc:767663776005881876> • <@&756507364374609970> **Yetkisine Sahip Kişiler Kayıt İşlemini Yapıcaktır **\n \n<a:hacc:767663776005881876> • **Hesabın Oluşturulma Tarihi:**" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd__**") +  "\n \n"  + kontrol + " \n \n**<a:hacc:767663776005881876> • **Tagımızı Alarak **` 么 ` **Bize Destek Olabilirsin.** \n")              
.setImage("https://i.gifer.com/W9IO.gif")
  strigalog.send(embed)
});

//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG










//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("765962182641975336") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.get("756452404999749683") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.addRole(rol)
   member.removeRole(kayıtsız)
member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)


   }
        else {

        }
    });


//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG










//-----------------------TAG-ROL----------------------\\     STG

client.on('userUpdate', async user => {
   let tag = "么"; // TAGINIZ
  let sunucuid = "756452257368899584"; //Buraya sunucunuzun IDsini yazın
  let rol = "765543765766307850"; //TAG ALINCA VERİLECEK ROL İDSİ
  let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); // TAG ALINCA HANGİ KANALA MESAJ ATILACAKSA YAZIN
  if (!tag) return;
  if (!rol) return;
  if (!channel) return;
  let member = client.guilds.get(sunucuid).members.get(user.id);
  if (!member) return;
  if (!member.roles.has(rol)) {
    if (member.user.username.includes(tag)) {
      member.addRole(rol)
      const tagalma = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`<@${user.id}> adlı kişi, ${tag} tagını aldığından dolayı <@&${rol}> rolünü kazandı.`)
      .setTimestamp()
      channel.send(tagalma)
    }
  }else{
    if (!member.user.username.includes(tag)) {
      member.removeRole(rol)
      const tagsilme = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`<@${user.id}> adlı kişi, ${tag} tagını sildiğinden dolayı <@&${rol}> rolünü kaybetti.`)
      .setTimestamp()
      channel.send(tagsilme)
    }
  }
});

//-----------------------TAG-ROL----------------------\\     STG








//-----------------------TAG-KONTROL----------------------\\     STG

client.on("guildMemberAdd", member => {
let tag = "么"; // TAGINIZ
let sunucuid = "756452257368899584"; // SUNUCUİDSİ
let rol = "765543765766307850"; // TAG ALINCA VERİLECEK ROL İDSİ
let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); // TAG ALINCA HANGİ KANALA MESAJ ATILACAKSA YAZIN
if(member.user.username.includes("么")){ // TEKRAR TAGINIZI GİRİN
member.addRole("765543765766307850") // TEKRAR TAG ROLÜNÜN İDSİN GİRİN
  const tagalma = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi **Taglı Sunucumuza Katıldı !**, ${tag} tagını aldığından dolayı <@&${rol}> rolünü kazandı.`)
      .setTimestamp()
      channel.send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\     STG










// YAVAŞ LAN KAÇ TANE ALIYON