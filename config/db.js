const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log(`mongodb connected on ${conn.connection.host}`);
    }
  } catch (err) {
    console.log(`error is :- ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
