const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message) {
    console.log(message.content);
});

bot.on('message', msg => {
    if (msg.content.toLowerCase() === 'vem är bög?') {
        msg.channel.send('Marcus Svanström');
    }
    if (msg.content.toLowerCase() === 'quien es mi amo?') {
        msg.channel.send('<@265579829485764619>');
    }
    if (msg.content.toLowerCase() === 'who is my owner?') {
        msg.channel.send('<@265579829485764619>');
    }
});

    
});

bot.on("ready", () => {
    bot.user.setActivity("con tu mami");
});
/*
bot.on('message', msg => {
    if (msg.content === '3321') {
    var title = ['a', 'ga', 'gga', 'igga', 'Nigga'];

    var i = 0;  // the index of the current item to show
        
    setInterval(function() {            // setInterval makes it run repeatedly
        msg.guild.channels.get("434008579838836740").setName(title[i++]);    // get the item and increment
        if (i == title.length) i = 0;   // reset to first element if you've reached the end
        msg.guild.roles.find("name", "Kings").setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
        
    }, 1000);  

};

});
*/

bot.on("ready", () => {
    var title = ['a', 'ga', 'gga', 'igga', 'Nigga'];

    var i = 0;  // the index of the current item to show


    setInterval(function() {            // setInterval makes it run repeatedly
        bot.channels.get("434008579838836740").setName(title[i++]);    // get the item and increment
        if (i == title.length) i = 0;   // reset to first element if you've reached the end
        bot.guilds.get("265583650165227520").roles.get("289055567480225793").setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
        bot.guilds.get("429774650961035264").roles.get("433029789612376074").setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
    }, 1000);   

});

bot.login(process.env.BOT_TOKEN);
