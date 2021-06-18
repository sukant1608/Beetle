const mongoose = require("mongoose");

const PinCodeSchema = new mongoose.Schema({
  pincode: {
    type: String,
    required: true,
    // unique: true,
  },
  provider: {
    type: Array,
  },
});

module.exports = mongoose.model("Pincode", PinCodeSchema);
