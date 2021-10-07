const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

//get data
router.get('/', async(req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

//send data
router.post('/', async (req, res) =>{
  const task = new Task(req.body);
  await task.save();
  res.json({
    status: 'Task Saved'
  });
});

//update data
router.put('/:id', async(req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Task Updated'
  });
});

//delete data
router.delete('/:id', async (req, res) => {
  await Task.finByIdAndRemove(req.params.id);
  res.json({
    status: 'Task Deleted'
  })
});

module.exports = router;
