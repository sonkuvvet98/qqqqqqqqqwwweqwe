const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
// 12. SATIRDA 2. ROL VAR
  
//------------------------------------KANALLAR-----------------------------------\\ STG
const tag = "么 ~"; // TAGINIZ (BAŞA GELECEK) 
  
const kayıtlı = message.guild.roles.find(r => r.id === "756452618146021496"); // ERKEK ROLÜNÜN İDSİ
  
// extra rol verme aktif etmek için hemen altaki ikinci & ucuncu adlı kısımdaki // işartetini kaldırın ve "54 55 59 60".ci satırdaki // işarterleri yine kaldırın.   
//const ikinci = message.guild.roles.find(r => r.id === "");   54 55 59 60 satırında //stg.addRole(ikinci) , stg.addRole(ucuncu) var 
//const ucuncu = message.guild.roles.find(r => r.id === "");    
  
const unregister = message.guild.roles.find(r => r.id === "756452404999749683"); // UNREGİSTER ROLÜNÜN İDSİ
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "756454569780707328"); // KAYIT KANALININ İDSİ
  const genelchat = message.guild.channels.find(c => c.id === "756464186363609088"); // GENEL SOHBET KANALININ İDİSİ
  const yedekleme = message.guild.channels.find(c => c.id === "767665586544967700"); // KAYITLARI SİZE ÖZEL GÖSTERİR.
  const dogrulandi = client.emojis.find(emoji => emoji.name === "OnaylamakGif"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM ÖRN: evet)
  if(!message.member.roles.array().filter(r => r.id === "756507364374609970")[0]) { // KAYIT YAPAN ROLÜN İDSİ
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("Kayıt Yapabilmek İçin `Kayıt Sorumlusu` Rolüne Sahip Olmalısın.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const stg = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    //stg.addRole(ikinci)
    //stg.addRole(ucuncu)
    stg.removeRole(unregister)
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    //stg.addRole(ikinci)
    //stg.addRole(ucuncu)
    stg.removeRole(unregister)
   
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`Kayıt Tamamlandı !`)
    .setDescription(`**Kayıt Eden: <@${message.author.id}>**\n\n**Verilen Roller: <@&${kayıtlı.id}>**\n\n**Yeni İsmin: \`${tag} ${nick} | ${yas}\`**`)
    .setColor("0x5e8dff")
    log.send(embed)
    message.react(dogrulandi)
    
        const agla = new Discord.RichEmbed()
        genelchat.send(`<@${stg.user.id}> Aramıza Hoş Geldin, Keyifli Vakitler Geçirmeni Dileriz.`)      

    
    const embed2 = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)     
    .setTitle(`Buddies Kayıt Logları`) 
    .addField(`Kayıt Eden`,  `<@${message.author.id}>`, true)
    .addField(`Kayıt Edilen`,  `<@${stg.user.id}>`, true)
    .addField(`Yeni İsmi`,  `${tag} ${nick} | ${yas}`, true)
    .addField(`Verilen Roller`,  `<@&${kayıtlı.id}>`, true)
    .addField(`Kayıt Edilen Kanal`,  `${message.channel.name}`, true)
    .setTimestamp()
    .setFooter(`DEX ❤`)
    .setColor("0x277ecd")
    yedekleme.send(embed2)
    

//------------------------------------------------MESAJ-----------------------------------------------\\       STG

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e", "boy", "man"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   