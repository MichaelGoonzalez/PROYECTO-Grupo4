const express = require('express');
const router = express.Router();

const Task = require('../js/task');

router.get('/', (req, res) => {
    res.render('indeex');
});

router.post('/add', async(req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send('recibido');
});

module.exports = router;
