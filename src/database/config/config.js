import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const mongoURI = process.env.MONGO_DEV_URL
const dbConnection =await mongoose.connect(mongoURI).then(() => {
    console.log(`Successfully connected to database`);
}).catch((error) => {
    console.error(`Failed to connect to database: ${error.message}`);
})

export default dbConnection;