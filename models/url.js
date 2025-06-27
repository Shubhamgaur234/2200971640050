const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId: String,
  redirectURL: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiryDate: Date, 
  visitHistory: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      referrer: String,
      location: String,
    },
  ],
});

module.exports = mongoose.model("URL", urlSchema);
