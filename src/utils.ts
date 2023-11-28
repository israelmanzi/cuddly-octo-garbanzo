/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const connectToDB = async (): Promise<void> => {
    try {
        console.info('Connecting to MongoDB ...');
        await mongoose
            .connect(ENV_VARS.MONGO_URI, {
                autoCreate: true,
                dbName: 'cuddly-octo-garbanzo',
                maxPoolSize: 10,
            })
            .then(() => {
                console.info('Connected to MongoDB!');
            });

        mongoose.connection
            .on('error', (err) => {
                console.error(err);
            })
            .on('disconnected', () => {
                console.info('Disconnected from MongoDB!');
            });
    } catch (error: any) {
        console.error(error);
    }
};

export const ENV_VARS = {
    PORT: parseInt(process.env.PORT || '3001', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI:
        process.env.MONGO_URI ||
        'mongodb://localhost:27017/cuddly-octo-garbanzo',
};
