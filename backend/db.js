import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/noteBook";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export { connect };
