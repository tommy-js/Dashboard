const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockId: Number,
  ticker: String,
  name: String,
  about: String,
  creation: String,
  prediction: Number,
  comments: [
    {
      userId: String,
      username: String,
      timestamp: Number,
      text: String,
      likes: Number,
      dislikes: Number,
    },
  ],
});

module.exports = mongoose.model("Stock", stockSchema);
