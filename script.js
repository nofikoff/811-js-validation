const TelegramBot = require('node-telegram-bot-api');

const token = '';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    
    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Hi", "Bye"],   ["Keyboard"], ["I'm robot", "Location"]]}
    });
    });

        bot.onText(/\/sendpic/, (msg) => {

            bot.sendPhoto(msg.chat.id,"https://cms-assets.tutsplus.com/uploads/users/30/posts/21015/preview_image/picture-tag.png",{caption : "Here we go ! \nThis is just a caption "}  );
                
            });

            bot.on('message', (msg) => {
                var pososi = "qwe"
                if (msg.text.includes(pososi)) {
                    bot.sendMessage(msg.chat.id, "Сам qwe "+ msg.from.first_name + ", ewq!");
                }
                var pidor = "ewq"
                if (msg.text.includes(pidor)) {
                    bot.sendMessage(msg.chat.id, "Не ну ты ewq "+ msg.from.first_name + ", go qwe!");
                }
                var Hi = "hi";
                if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
                    bot.sendMessage(msg.chat.id, "Hello dear "+ msg.from.first_name);
                }
                var bye = "bye";
                if (msg.text.toString().toLowerCase().includes(bye)) {
                    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye " + msg.from.first_name);
                }    
                 var robot = "I'm robot";
                if (msg.text.indexOf(robot) === 0) {
                    bot.sendMessage(msg.chat.id, "Robot GET THE FUCK OUT HERE!");
                }
                var location = "Location";
                if (msg.text.indexOf(location) === 0) { 
                    bot.sendLocation(msg.chat.id,50.2648697, 28.6766891); 
                    bot.sendMessage(msg.chat.id, "Here is the point");
                } 
                });
