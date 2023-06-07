import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection...");
    return Promise.resolve();
  }

  console.log("=> using new database connection...");

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: process.env.MONGO_DB_NAME,
    });
    isConnected = true;
    console.log("=> connection to database established successfully.");
  } catch (error) {
    console.log("=> error while connecting to database: ", error);
  }
};
