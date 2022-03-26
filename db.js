const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://MyCruit:vTDeh2XrbD7LlPxo@cluster0.0yyda.mongodb.net/MyCruit",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success");
  } catch (error) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;
