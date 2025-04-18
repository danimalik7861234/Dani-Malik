module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "AUTO RESTART",
    commandCategory: "System",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Karachi").format("HH:mm:ss");
  var idad = global.config.ADMINBOT;    
  console.log(timeNow)
  var seconds = moment.tz("Asia/Manila").format("ss");
  var timeRestart_1 = `12:00:${seconds}`𝐒𝐨 𝐣𝐚 𝐛𝐚𝐡𝐨𝐭 𝐫𝐚𝐭 𝐡𝐨𝐠𝐢 𝐡𝐚𝐢
  var timeRestart_2 = `11:00:${seconds}`𝐃𝐀𝐍𝐈 𝐛𝐚𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐤𝐡𝐚𝐲𝐚🥀
  var timeRestart_3 = `10:00:${seconds}`𝐊𝐲𝐚 𝐛𝐡𝐚𝐢 𝐲𝐞 𝐤𝐨𝐢 𝐭𝐢𝐦𝐞 𝐡𝐚𝐢 𝐠𝐡𝐫 𝐚𝐚𝐧𝐞 𝐤𝐢
  var timeRestart_4 = `09:00:${seconds}`𝐓𝐯 𝐨𝐧 𝐤𝐚𝐫𝐨 𝐦𝐞𝐫𝐞 𝐥𝐢𝐞 𝐤𝐨𝐢😁
  var timeRestart_5 = `08:00:${seconds}`𝐊𝐡𝐮𝐬𝐡 𝐫𝐞𝐡 𝐤𝐞 𝐥𝐢𝐞 𝐤𝐡𝐚𝐬𝐚 𝐡𝐨𝐭𝐚 𝐤𝐡𝐚𝐬𝐨🤪
  var timeRestart_6 = `07:00:${seconds}`𝐒𝐡𝐚𝐫𝐝𝐢 𝐛𝐚𝐡𝐨𝐭 𝐡𝐨𝐠𝐢 𝐡𝐚𝐢 🥶🥶
  var timeRestart_7 = `06:00:${seconds}`𝐓𝐡𝐨𝐫𝐚 𝐀𝐫𝐚𝐦 𝐤𝐚𝐨𝐨 𝐲𝐚𝐫 𝐭𝐚𝐠𝐡 𝐠𝐚𝐲𝐞 𝐡𝐨𝐠𝐞💫
  var timeRestart_8 = `05:00:${seconds}`𝐑𝐨𝐤𝐚 𝐣𝐚 𝐀𝐚𝐣 𝐚𝐥𝐥𝐚𝐡 𝐤𝐨 𝐲𝐚𝐝 𝐤𝐢𝐲𝐚 𝐡𝐚𝐢🤔🤔
  var timeRestart_9 = `04:00:${seconds}`𝐬𝐡𝐚𝐫𝐝𝐢 𝐧𝐞 𝐣𝐢𝐧𝐚 𝐤𝐡𝐚𝐫𝐚𝐦 𝐤𝐢𝐲𝐚 𝐡𝐚𝐢😁😁🥶
  var timeRestart_10 = `03:00:${seconds}`𝐇𝐚𝐫 𝐇𝐚𝐥𝐥 𝐌𝐞 𝐊𝐡𝐮𝐬𝐡 𝐑𝐚𝐡𝐨💞💞
  var timeRestart_11 = `02:00:${seconds}`𝐁𝐚𝐧𝐝 𝐤𝐚𝐫 𝐦𝐨𝐛𝐥𝐢𝐞 𝐧𝐞𝐦𝐚𝐳 𝐤𝐚𝐫𝐧𝐞 𝐣𝐚𝐰𝐨💞
  var timeRestart_12 = `01:00:${seconds}`𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚 𝐰𝐨 𝐣𝐚𝐥𝐝𝐢 𝐬𝐞💞
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1 || timeNow == timeRestart_2 || timeNow == timeRestart_3|| timeNow == timeRestart_4|| timeNow == timeRestart_5|| timeNow == timeRestart_6 || timeNow == timeRestart_7|| timeNow == timeRestart_8|| timeNow == timeRestart_9|| timeNow== timeRestart_10|| timeNow== timeRestart_11|| timeNow == timeRestart_12) && seconds < 6 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`⚡️Now it's: ${timeNow}\nBaby Me Restart Hoke Atti ahu!!!`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Karachi").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}