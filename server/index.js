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


//read
app.get('/read', async (req, res) => {
    taskModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    });
});
//create
app.post('/insert', async (req, res) => {
    const taskName = req.body.taskName;
    const taskDescription = req.body.taskDescription;
    const task = new taskModel({taskName: taskName, taskDescription: taskDescription});
    try{
        await task.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }
});

// get id
app.get("/:id",(req, res)=>{
    const id = req.params.id;
    taskModel.findById(id, (err, result)=>{
        res.json(result);
    })
})




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

//delete





// initializes port 3001
app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});