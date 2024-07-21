const mongoose = require('mongoose');
 const Chat = require("./models/chat.js");

 main().then(() =>{
    console.log("connected to db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats = [
    {
    from : "joe",
    to : "rachel",
    msg: "how you doin?",
    created_at : new Date(),
},
{
    from : "rachel",
    to : "ross",
    msg: "whats up buddy",
    created_at : new Date(),
},
{
    from : "chandler",
    to : "rachel",
    msg: "wanna dance with me?",
    created_at : new Date(),
},
{
    from : "ross",
    to : "monica",
    msg: "what cooking for dinner mona?",
    created_at : new Date(),
},
]
Chat.insertMany(allChats);
