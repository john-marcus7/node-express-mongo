import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

async function connectMongoDB() {
  try {
    // Add listeners before initiating the connection
    mongoose.connection.on("error", (error) => {
      console.error("Connection error", error);
    });

    mongoose.connection.once("open", () => {
      console.log("Database connected");
    });

    // Attempt to connect to MongoDB
    await mongoose.connect(uri);
    
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectMongoDB;
