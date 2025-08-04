import mongoose from "mongoose";

export const connectDb = (function () {
  let isConnected = false; //Private state via closure

  return async function (uri) {
    if (isConnected) {
      console.log("Using existing MongoDB connection");
      return;
    }

    try {
      await mongoose.connect(uri);
      isConnected = true;
      console.log("Mongo DB connected");
    } catch (error) {
      console.error("Error connection to Mongo DB : " + error.message);
      process.exit(1);
    }
  };
})();
