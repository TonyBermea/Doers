const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//Gets data into json format
app.use(express.json());
//port
const PORT = process.env.PORT|| 5000;

//use cors
app.use(cors());

//Import routes
const TodoItemRoute = require('./routes/todoItems');

//Connects to MongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

//Add Port and connect to server
app.listen(PORT, () => console.log("Server connected"));