const mongoose = require("mongoose")
const dotenv = require('dotenv').config()

const mySecret = process.env.MONGODB_URI


const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mySecret, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log('Connected Successfully vendor');
    }
  } catch (error) {
    console.log('Connection Failed', error);
  }
}



module.exports = { initializeDatabase };