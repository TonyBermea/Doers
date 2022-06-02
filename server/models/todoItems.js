const mongoose = require('mongoose');

//Creates new schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

//Exports the schema
module.exports = mongoose.model('todo', TodoItemSchema);