// initialize the technologies needed for index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('Cors');
// app variable is needed to reference variable express that requires express.js
const app = express();


app.use(express.json());