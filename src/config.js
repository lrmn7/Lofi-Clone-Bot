require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['',''], 
  SpotifyID: process.env.SPOTIFYID || '', 
  SpotifySecret: process.env.SPOTIFYSECRET || '', 
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#DDBD86', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || '',
    invite: process.env.INVITE || '',
    vote: process.env.VOTE || '',
    bg: process.env.BG || ''
  },

  nodes: [
    {
      url: process.env.NODE_URL || '',
      name: process.env.NODE_NAME || '',
      auth: process.env.NODE_AUTH || '',
      secure: parseBoolean(process.env.NODE_SECURE || ''),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
