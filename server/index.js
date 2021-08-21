// initialize the technologies needed for index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('Cors');
// app variable is needed to reference variable express that requires express.js
const app = express();

// this line to call the schema for database
app.use(express.json());
app.use(cors());


// initializes port 3001
app.listen(3001, () => {
    console.log(`Server started on port 3001`);
});