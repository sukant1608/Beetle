const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const BranchSchema = new mongoose.Schema({
  Branch_Name: {
    type: String,
    // unique: true,
  },
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  Contact_Number: {
    type: Array,
  },
  Branch_Incharge: {
    type: String,
  },
  Pincode_covered: {
    type: Array,
  },
  password: {
    type: String,
    required: true,
  },
});

BranchSchema.pre("save", async function (next) {
  try {
    const hashed = await bcrypt.hash(this.Branch_Name, 11);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

BranchSchema.methods.comparePassword = async function (attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (err) {
    return next(err);
  }
};

module.exports = mongoose.model("Branch", BranchSchema);
