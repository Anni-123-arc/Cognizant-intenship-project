import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URL;

export const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1); // Exit if DB fails
    }
};
