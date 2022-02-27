// Get 'dotenv' node module...
// ...and load .env file contents into process.env
require("dotenv").config();
// Get 'mongoose' node module
const mongoose = require("mongoose");

// This function will use the mongoose.connect method...
// ...to connect us to our database via our URI
const connection = async() => {
    try {
        console.log("Connecting to database...")
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

// Calls the connection function
connection();