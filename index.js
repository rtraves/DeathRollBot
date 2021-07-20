const Discord = require("discord.js")
const client  = new Discord.Client()
const min = 1; // this only exists because I'm not sure if I want to allow ranges or not
const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	
  if (command === 'ping') { // just a test
	message.channel.send('Pong.');
  } else if (command === 'roll') {
		const amount = parseInt(args[0]); // get an int from args '!roll 100'
    message.channel.send(getRandom(min, amount));

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
	}
});

function getRandom(min, amount) {
  return Math.round(Math.random() * (amount - min) + min);
}
client.login(process.env.TOKEN);