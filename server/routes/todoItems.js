const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');


//First route
router.post('/api/item', async (req, res)=> {
    try{
        const newItem = new todoItemsModel({
          item: req.body.item
        })
//Save item in database
      const saveItem = await newItem.save()
      res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

//Second route
router.get('/api/items', async (req, res) =>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

//Update an Item
router.put('/api/item/:id', async (req, res) =>{
    try{
        //Find the item by its id and update it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }
})

//Delete item
router.delete('/api/item/:id', async (req, res) =>{
    try{
        //Find the item by its id and delete it
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err){
        res.json(err);
    }
})

module.exports = router;