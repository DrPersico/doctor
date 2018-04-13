const Discord = require("discord.js");
const TOKEN = "NDM0MDExNjQ3MDM2ODgyOTQ2.DbEMbQ.bGvcEHadQ-NIygh6cO9kOxjAgik";

var bot = new Discord.Client();

bot.on("message", function(message) {
    console.log(message.content);
});

bot.on('message', msg => {
    if (msg.content === 'vem är bög?') {
        msg.channel.send('Marcus Svanström');
    }
});

bot.on('message', msg => {
    if (msg.content === 'begin') {

        var title = ['a', 'ga', 'gga', 'igga', 'Nigga'];

        var i = 0;  // the index of the current item to show
        
        setInterval(function() {            // setInterval makes it run repeatedly
            msg.guild.channels.get("434080791710924803").setName(title[i++]);    // get the item and increment
            if (i == title.length) i = 0;   // reset to first element if you've reached the end
        }, 1000);  




        function begins(){
            var first = setInterval(function(){ msg.guild.channels.get("434080791710924803").setName("a").catch(console.error);}, 1000);
            var firststop = setInterval(function(){clearInterval(first);}, 1001)
            var second = setInterval(function(){ msg.guild.channels.get("434080791710924803").setName("ga").catch(console.error);}, 2000);
            var secondstop = setInterval(function(){clearInterval(second);}, 2001)
            var third = setInterval(function(){ msg.guild.channels.get("434080791710924803").setName("gga").catch(console.error);}, 3000);
            var thirdstop = setInterval(function(){clearInterval(third);}, 3001)
            var fourth = setInterval(function(){ msg.guild.channels.get("434080791710924803").setName("igga").catch(console.error);}, 4000);
            var fourthstop = setInterval(function(){clearInterval(fourth);}, 4001)
            var fifth = setInterval(function(){ msg.guild.channels.get("434080791710924803").setName("nigga").catch(console.error);}, 5000);
            var fifthstop = setInterval(function(){clearInterval(fifth); begins(); }, 5001)




        }
    }
});

  

bot.login(TOKEN);