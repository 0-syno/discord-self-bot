const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
});

let isSpamming = false;

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.channel.send(` **PING OF ${message.author.username.toUpperCase()}**\`\`\`:ping_pong:Latency is: ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms\`\`\``);
  }
});

  });

  client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!spam')) {
      if (isSpamming) return message.channel.send('Spam is already in progress. Use `!stopspam` to stop.');
  
      isSpamming = true;
      const customMessage = message.content.slice('!spam'.length).trim();
      const timesToRepeat = 500;
  
      if (!customMessage) {
        isSpamming = false; // Reset the flag if no message is provided
        return message.channel.send('Please provide a message after `!spam`.');
      }
  
      for (let i = 0; i < timesToRepeat && isSpamming; i++) {
        await message.channel.send(customMessage);
      }
    }
  
    if (message.content.startsWith('!stopspam')) {
      isSpamming = false;
      message.channel.send('Spam stopped.');
    }
  });
  
client.login('your discord token here');
