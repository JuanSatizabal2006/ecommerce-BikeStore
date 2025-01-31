const { config } = require('dotenv');
config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_DB
}

const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_KEY_2 = process.env.API_KEY_2
const CLOUDINARY_URL = process.env.CLOUDINARY_URL


module.exports = { dbConfig, CLOUD_NAME, API_KEY, API_KEY_2, CLOUDINARY_URL };