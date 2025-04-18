const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const { alldown } = require("nayan-videos-downloader");

module.exports = {
  config: {
    name: "linkAutoDownload",
    version: "1.3.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Automatically detects links in messages and downloads the file.",
    commandCategory: "Utilities",
    usages: "",
    cooldowns: 5
  },

  run: async function ({ events, args }) {
    // Empty run function
  },

  handleEvent: async function ({ api, event }) {
    let messageText = event.body ? event.body.toLowerCase() : "";

    // Agar message kisi link se start hota hai to process karo
    if (messageText.startsWith("https://")) {
      // Reaction lagao "📿"
      api.setMessageReaction("📿", event.messageID, () => {}, true);

      // Link ka data fetch karo
      const videoData = await alldown(messageText);
      console.log(videoData);

      const { low, high, title } = videoData.data;

      // Reaction lagao "❤️‍🩹"
      api.setMessageReaction("❤️‍🩹", event.messageID, () => {}, true);

      // High-quality link ka data lo
      const videoBuffer = (await axios.get(high, { responseType: "arraybuffer" })).data;

      // File ko save karo cache folder mein
      const filePath = path.join(__dirname, "/cache/auto.mp4");
      fs.writeFileSync(filePath, Buffer.from(videoBuffer, "utf-8"));

      // File ko bhejo
      api.sendMessage(
        {
          body: `✨❁━━━[ 𝐃𝐀𝐍𝐈 ]━━━❁✨\n\nᴛɪᴛʟᴇ: ${title}\n\n✨❁━━━[ 𝐌𝐀𝐋𝐈𝐊 💚✨ ]━━━❁✨`,
          attachment: fs.createReadStream(filePath)
        },
        event.threadID,
        event.messageID
      );
    }
  }
};