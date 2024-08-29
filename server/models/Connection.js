require('dotenv').config();
const mongoose = require('mongoose')

const url = process.env.DATABASE_URL;

const connection = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('Connect to the database');
    } catch (error) {
        console.log(`connection is failed due to ${error}`);
        process.exit(0);
    }  
}
module.exports = connection