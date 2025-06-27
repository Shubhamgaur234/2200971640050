const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId: String,
  redirectURL: String,
  createdAt: {
    type: Date,
    default: Date.now,
     expires: 1800
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

