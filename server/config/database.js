const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("MongoDB Connection Successful");
    });
  } catch (error) {
    console.log("Error In Connecting to MongoDB : ", error.message);
  }
};

module.exports = connectDB;
