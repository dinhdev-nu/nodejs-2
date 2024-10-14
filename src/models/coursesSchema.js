const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const courses = new Schema({
    name: { type: String, maxLength: 100, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
});

module.exports = mongoose.model('Course', courses);