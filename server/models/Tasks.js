// this is the schema that will be call in index.js
// this is a json 

const mongoose = require('mongoose');

//create an object
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        date: Date,
    },
});

const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;