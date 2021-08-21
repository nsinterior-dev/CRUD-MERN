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
mongoose.connection.once('open', ()=>{
    console.log('Mongodb connection established successfully');
})

//read
app.get('/', async (req, res) => {
    taskModel.find({}, (err, task) => {
        if (err) {
            res.send(err);
        }

        res.send(task);
    });
});
//create
app.post('/create', (req, res) => {
    const taskModel = new taskModel(req.body);
    taskModel
        .save()
        .then((taskModel)=>{
        res.json(taskModel);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
});

// get id
app.get("/:id",(req, res)=>{
    const id = req.params.id;
    taskModel.findById(id, (err, task)=>{
        res.json(task);
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
app.listen(3001, () => {
    console.log(`Server started on port 4000`);
});