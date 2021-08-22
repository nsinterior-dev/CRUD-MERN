// initialize the technologies needed for index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('Cors');
const PORT = 3001;
// app variable is needed to reference variable express that requires express.js
const app = express();
//calling the schema tasks.js\\
const taskModel = require('./models/Tasks');


//initialize connection with the databasse
mongoose.connect('mongodb+srv://admin:testpw1234@crudapp.agmbf.mongodb.net/taskdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});
mongoose.connection.once('open', ()=>{
    console.log('Mongodb connection established successfully');
})

// this line to call the schema for database
app.use(express.json());
app.use(cors());


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
    const Tasks = new taskModel(req.body);
    Tasks
        .save()
        .then((Tasks)=>{
        res.json(Tasks);
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
app.post('/:id', (req, res) => {
    const id = req.params.id;
    taskModel.findById(id, (err, task) => {
        if(!task) res.status(404).send('Task not found');
        else {
            task.text = req.body.text;
            task.description = req.body.description;
            task 
                .save()
                .then((task) => {
                    res.json(task);
                })
                .catch((err) => res.status(500).send(err.message));
        }
    });
});




// initializes port 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});