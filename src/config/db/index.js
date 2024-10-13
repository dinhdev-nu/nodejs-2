const mongoose = require('mongoose');
require('dotenv').config()

async function coursesDb () {
    try {
        await mongoose.connect(process.env.DB_COURSES);
        console.log("SUCESSFULLY!!!")
    } catch (error) {
        console.log("FAILURE!!!")
    }
}

module.exports = { coursesDb }
