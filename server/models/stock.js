const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockId: String,
  ticker: String,
  name: String,
  about: String,
  timestamp: String,
  comments: [
    {
      userId: String,
      username: String,
      timestamp: String,
      text: String,
      likes: Number,
      dislikes: Number,
    },
  ],
});

module.exports = mongoose.model("Stock", stockSchema);
