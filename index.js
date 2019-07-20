const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('je suis jamais la');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!kick')) {

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`${user.tag} a ete kick`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('mentionne la personne a kick');
    }
  }
});

client.login('NjAwNjYwMzgwODEzMDk5MDEx.XTMbdw.8HTTWxzoO-TceMX_q-_k2J4zp3I');

client.on('message', message => {
  if (message.content === 'yo') {
    message.channel.send('salut comment va tu ?');
  }
});

client.on('message', message => {
  if (message.content === 'salut') {
    message.channel.send('salut comment va tu ?');
  }
});

client.on('message', message => {
  if (message.content === 're') {
    message.channel.send('re');
  }
});

client.on('message', message => {
  if (message.content === 'tu fait du gta 5 rp ?') {
    message.channel.send('oui Polo 83 fait du gta 5 rp');
  }
});

client.on('message', message => {
  if (message.content === 'que fait tu ?') {
    message.channel.send('je patiente pour que on me programme');
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Bienvenu sur le serveur SMICOU,${member}`);
});

client.on('message', message => {
  if (message.content === '${member}') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === 'meilleure jeux') {
    message.channel.send('merci beaucoup :star:  :star:  :star:  :star:  :star: ');
  }
});
