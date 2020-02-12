const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  topic: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  comments: {
    type: Array,
    required: true
  },

  hashtags: {
    type: Array
  },

  Date: {
    type: Date,
    default: Date.now
  }
});

const FeedModel = mongoose.model("feed", FeedSchema);
module.exports = FeedModel;
