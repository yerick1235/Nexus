import mongoose, { mongo } from "mongoose";

export const connect = async () => {
  try {
    mongoose.connection.on("error", () => {
      console.log("MongoDB | Connection lost...")
      mongoose.disconnect();
    });
    mongoose.connection.on('connecting', () => console.log('MongoDB | try connecting'))
        mongoose.connection.on('connected', () => console.log('MongoDB | connected to mongodb'))
        mongoose.connection.on('open', () => console.log('MongoDB | connected to database'))
        mongoose.connection.on('disconnected', () => console.log('MongoDB | disconnected'))
        mongoose.connection.on('reconnected', () => console.log('MongoDB | reconnected to mongodb'))
        await mongoose.connect('mongodb://localhost:27017/NexusDB')
  } catch (error) {
    console.error("Database Connection Failed ", error);
  }
};
