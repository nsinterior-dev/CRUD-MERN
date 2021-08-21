// initialize the technologies needed for index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('Cors');
// app variable is needed to reference variable express that requires express.js
const app = express();

//calling the schema tasks.js\\
const taskModel = require('./models/Tasks');

// this line to call the schema for database
app.use(express.json());
app.use(cors());

//initialize connection with the databasse
mongoose.connect('mongodb+srv://admin:testpw1234@crudapp.agmbf.mongodb.net/taskdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});


app.post('/insert', async (req, res) => {
    const taskName = req.body.taskName;
    const task = new taskModel({taskName: 'task 1'});
    try{
        await task.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    taskModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
})

// initializes port 3001
app.listen(3001, () => {
    console.log(`Server started on port 3001`);
});