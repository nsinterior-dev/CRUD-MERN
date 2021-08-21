// this is the schema that will be call in index.js
// this is a json 

const mongoose = require('mongoose');

//create an object
const taskSchema = new mongoose.Schema({
    text: String,
    description: String,
});

module.exports = mongoose.model('taskSchema', taskSchema);