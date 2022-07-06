const mongoose = require("mongoose");

const totalhrs = new mongoose.Schema({
  clinician: {
    type: String,
  },
  week_01_weekday: {
    type: Number,
  },
  week_01_weekend: {
    type: Number,
  },
  week_02_weekday: {
    type: Number,
  },
  week_02_weekend: {
    type: Number,
  },
});

module.exports = mongoose.model("totalhrs", totalhrs);
