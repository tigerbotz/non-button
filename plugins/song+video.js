const config = require('../config')
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("> 🔗Please give me a URL or TITLE🔗*")
const search = await yts (q) 
const data = search.videos[0];
const url = data.url

let desc = `
  *🥷 🎶TIGER SOND DL 🎵 🥷*
  
 🥷 Title: ${data.title}
 🥷 Description: ${data.description}
 🥷 Time: ${data.timestamp}
 🥷 Ago: ${data.ago}
 🥷 Views: ${data.views}
    
 *🎵Your song downloading...*
 
> © MADE BY WHITE TIGER MIND INC 🥷
  `
 await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
 
 //download audio

 let down = await fg.yta(url)
 let downloadUrl = down.dl_url
    
 //send audio+ document message 

 await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> Thenula Panapiti"},{quoted:mek})

 


}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

//--------------------------------------VIDEO-DOWNLOAD------------------------------------------------

cmd({
    pattern: "video",
    desc: "download videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(">🔗Please give me a URL or TITLE🔗*")
const search = await yts (q) 
const data = search.videos[0];
const url = data.url

let desc = `
  *🥷 📽️TIGER VIDEO DL📽️ 🥷*
  
  - Title: ${data.title}
  - Description: ${data.description}
  - Time: ${data.timestamp}
  - Ago: ${data.ago}
  - Views: ${data.views}
    
 *🎬 Your video downloading....*
 
> © MADE BY WHITE TIGER MIND INC 🥷
  `
 await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
 
 //download video

 let down = await fg.ytv(url)
 let downloadUrl = down.dl_url
    
 //send video+ document message 

 await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4",caption:"> WHITE TIGER MIND INC 🥷"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> WHITE TIGER MIND INC 🥷"},{quoted:mek})

 


}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
