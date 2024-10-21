import mongoose from "mongoose";

const Connection = async () => {
  const URL = "mongodb://127.0.0.1:27017/afc-db";
  try {
    
    mongoose.set("strictQuery", true);
    await mongoose.connect(URL, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting to database : ", error.message);
  }
};

export default Connection;
