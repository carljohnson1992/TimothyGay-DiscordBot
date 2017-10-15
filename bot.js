// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'token';
var fs = require('fs');

var help = fs.readFileSync('./commands.txt', 'utf8');
// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('TIMOTHY IS FUCKING GAY!!!!');
});

// Create an event listener for messages
client.on('message', message => {

  if (message.content === 'timothy') {

    message.channel.send('TIMMOTHY FUCKING HOMO FUCK TIMMOTHS I HATE TIMMY!!!!');
      };
  if (message.content === 'timothy who') {

    message.channel.send('Timothy be like : MY NAME SEAN!!');
      };
  if (message.content === 'timothy nazi') {

    message.channel.send('https://media.discordapp.net/attachments/358642254757494788/366629145855393792/20170722_122627.jpg?width=386&height=682');
	  };
  if (message.content === 'timothy owo') {

    message.channel.send('https://media.discordapp.net/attachments/358642254757494788/366159364312137728/image.png?width=523&height=112');
      };
  if (message.content === 'timothy dad') {

    message.channel.send('https://media.discordapp.net/attachments/364080873873604615/366315044230922251/timothy_drunk_3.png?width=267&height=90');
      };
  if (message.content === 'timothy help') {

    message.channel.send(help);
	};
  if (message.content === 'timothy sad') {

    message.channel.send('https://media.discordapp.net/attachments/364080873873604615/366315073884389377/timothy_drunk_4.png?width=430&height=303');
      };
 if (message.content === 'timothy honor') {

    message.channel.send('https://media.discordapp.net/attachments/364080873873604615/366315117065011200/timothy_drunk_5.png?width=359&height=87');
     };
if (message.content === 'timothy homo') {
      if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
        return message.reply("This tbh");
      };
if (message.content === 'timothy homosexual') {
            if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
              return message.reply("This tbh");
            };
if (message.content === 'timothy gay') {
            if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
              return message.reply("This tbh");
            };
if (message.content === 'timothy is gay') {
              if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
               return message.reply("This tbh");
            };
if (message.content === 'timothy is straight') {
              if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
                return message.reply("WRONG!");
            };
if (message.content === 'fuck timothy') {
              if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
                return message.reply("This tbh");
            };
if (message.content === 'timothy is not gay') {
             if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
                return message.reply("WRONG!");
            };
if (message.content === 'smuggy') {

        message.channel.send('<@195460837329207297>');
              };
	
if (message.content === 'wednesday') {

        message.channel.send('<@238758020182441984>day');
              };
    if (message.content === "timball") {
    	var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			client.reply(message, sayings[result]);
    };
});

// Log our bot in
client.login(process.env.BOT_TOKEN);
