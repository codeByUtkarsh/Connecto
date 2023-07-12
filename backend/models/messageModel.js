const mongoose = require('mongoose');

//Message Schema is going to have 3 things
//Name of the Sender
//content of the message
//reference to the chat to which it belongs to 
const messageModel = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, trim: true },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
},
  {
    timeStamps:true,
  }
);

const Message = mongoose.model("Message",messageModel);
module.exports = Message;