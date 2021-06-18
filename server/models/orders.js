const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  branches: {
    type: Array,
  },
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
