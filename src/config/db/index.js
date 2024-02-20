const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://ngotuan2200:${process.env.PASSWORD_DB}@todoapp.hqcgj6t.mongodb.net/ToDoApp?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("MongoDB connected successfully");
      });
  } catch (error) {
    console.log("Connection error: " + error);
  }
};

module.exports = connectDB;
