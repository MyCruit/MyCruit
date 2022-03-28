const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const adminModel = new mongoose.model("admin", adminSchema);

module.exports = adminModel;
