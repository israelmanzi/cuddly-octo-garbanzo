import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARS = {
    PORT: parseInt(process.env.PORT || '3001', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
};
