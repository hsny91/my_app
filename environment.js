import * as dotenv from 'dotenv';

// load environment variables
dotenv.config();

export const PORT = process.env.PORT || '3000';