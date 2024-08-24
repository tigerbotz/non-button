const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2d4d67f5088957f82b558.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "🇭​​🇮​ , ​🇦​​🇲​ ​🇦​​🇱​​🇮​​🇻​​🇪​ ​🇳​​🇴​​🇼​ ​🇹​​🇭​​🇮​​🇸​  ​🇮​​🇸​ ​🇹​​🇮​​🇬​​🇪​​🇷​ ​🇸​​🇹​​🇦​​🇹​​🇺​​🇸​ ​🇲​​🇩​.. ..🥷㊙️...",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"

};
