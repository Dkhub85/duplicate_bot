const Discord = require('discord.js');

const client = new Discord.Client();


client.once('ready', () =>{
console.log('claim bot is online');
});

client.on('message', message =>{
    var messcont = message.content;
        async function messagegetter() {
            var sum_messages=[];
            let last_id;
            var i=0;
            while (true) {
                var options = { limit: 100 };
                if (last_id) {
                    options.before = last_id;
                }
                var temp=[];
                const msgs1 = await message.channel.messages.fetch(options);  
                last_id=msgs1.last().id.toString();
                temp.push(...msgs1.array());
                for(var i in temp){
                    sum_messages.push(temp[i].content);
                }
                if (msgs1.size !== 100 || sum_messages.size >= 500) {
                    break;
                }    
            }
            return sum_messages;
        }       
        var xxxx=[];
        var xxx = messagegetter();
        xxx.then(msg => {
        xxxx=xxxx.concat(msg);
        });
        setTimeout(function(){ 
        xxxx.shift();
        console.log(xxxx);     
        if(xxxx.indexOf(messcont) != -1){
            message.delete();
        }
        }, 1000);

});

client.login('NzgxODgxNzUxNTI1MTMwMjYx.X8EGIA.kVdXecq4XGlUcWJ75L8P7QJmiR8');