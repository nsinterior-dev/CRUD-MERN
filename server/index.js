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

//create
app.post('/insert', async (req, res) => {
    const taskName = req.body.taskName;
    const task = new taskModel({taskName: taskName});
    try{
        await task.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }
});
//read
app.get('/read', async (req, res) => {
    taskModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    });
});
//update
app.put("/update", async (req, res) => {

    const newTaskName = req.body.newTaskName;
    const id = req.body.id;

    try {
        await taskModel.findById(id, (err, updatedList) => {
            updatedList.taskName = newTaskName;
            updatedList.save();
            res.send("update");
        });
    }
    catch (err) {
        console.log(err);
    }
});






// initializes port 3001
app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});