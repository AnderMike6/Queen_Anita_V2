//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234814746107";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUI4aU9jTlFKbzNCNHRCcFdhS3RMMlhub1BzbWYweXZCelZzZWNUOG9tOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamJJc0FKaHpHQzlhbi8yaFVLRkkvZVBsdERnTHV2OUR1UGdNU2RrNE9WUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RDYzTDZYemVONkNkRE9Pc29wUk55QTV0Nmw3aEtJYklaS293cFpxbTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRmZZckpacytaaDlFNnhweHBrMmdTNVRMNUFWajdnaEduR3QzQkVDbG1rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNZWhCemtWK2lrT21WamRuTW5VN1F2cEthbzhwZlBpVFVSb01zTnRIRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8wQzBWT0dYNlZxN3FuTmhHVGVlNGFoa2w4NUdtYjR1K00zL3UzWENKaDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Fmekd1dDlRR1oyQkJqY0JLbDlIZG9ack9uakxhY2I5cmxPcGVxcWpuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWZ1bHhTUHBLTHU5NW8vWHhiMm0zM0l0aEUyQlN2d1QzZ3BQRHI2WFhFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRLS1lLRjZFOWNSSUkyVitIWm1VS2Y3ZHFhSnY3aUp0TXp6K1NQeUhDbHMrTGEwTmNOZjNYRThtQStYbjFyeXVGZFcxU0QyWkdTSURSYUk1SHdEeml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJ4U2VBZDNJdkZnYzR0di9VSk5zMEljL2dOTE01N2dUcUtlQThZL0pxSzJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0bTNOWHZiOVJDYU4tYlowZDlmSldRIiwicGhvbmVJZCI6IjFiNGFlZTUzLTAwNGYtNDRmMC1iMjI5LWY5ZmYzNDkwMDliZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cDVwcWc3aXVDZ29KWld0R1hxeUY1WmFUdEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnh2UEVjMkE1eWcwWFVLVEYyaGw1NGMxMUdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJNRzJOWEo5IiwibWUiOnsiaWQiOiIyMzQ4MTQ3NDY4MTA3OjQwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJelY0Y2dIRU43d3ZiMEdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkRnRvOUZDL0ZGQjAweDZ0ckQzRHNNRCtuSTR4a0xsQmcrZFJmUDdvTFJFPSIsImFjY291bnRTaWduYXR1cmUiOiI1S2FjLzJ6M2p1djdzR2JhWGozeVpUL1pwZjNScnR2OVQxSXh3WWNDbnh0VU9TZjNheWRpWXFUd0puazg0Q21JclB1MnAyQjZ4TVRNSnRBK0hXdEtBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUmJxY3BGakhQWFhNcXFRL1l2SldqYkM5YUZoVTNGUUJTOTNYSUNzRDltV1dXd1NZYVZMSzd3eEVPSmlOcnpoemRPeU8zSGpobFQvVWJmdE8rSk5SaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ3NDY4MTA3OjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhSYmFQUlF2eFJRZE5NZXJhdzl3N0RBL3B5T01aQzVRWVBuVVh6KzZDMFIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzk1NTI4NzV9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`∆-MD",
  author: process.env.PACK_AUTHER || "∆-MD",
  packname: process.env.PACK_NAME || "∆ G U Y",
  botname: process.env.BOT_NAME || "∆-MD",
  ownername: process.env.OWNER_NAME || "∆",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
