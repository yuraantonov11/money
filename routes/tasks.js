const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
let db = mongojs('mongodb://yuraantonov11:199111@ds163020.mlab.com:63020/mm', ['tasks']);


router.get('/tasks', (req, res, next) => db
    .tasks.find((err, tasks) => {


    if (err) {
      res.send(err);
    }

    res.json(tasks);

  }));

router.get('/task/:id', (req, res, next) => db
    .tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{

    if (err) {
      res.send(err);
    }

    res.json(task);

  }));

router.post('/task/', (req, res) => {
  let task = req.body;
  if (!(task.title || task.isDone + '')){
    res.status(400);
    res.json({
      error: 'Bad data'
    });

  } else {
    db.tasks.save(task, (err, task)=>{

      if (err) {
        res.send(err);
      }

      res.json(task);
    });
  }
});

router.delete('/task/:id', (req, res, next) => db
    .tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{

      if (err) {
        res.send(err);
      }

      res.json(task);

    }));

router.put('/task/:id', (req, res) => {

  let task = req.body;
  let updTask = {};

  if (updTask.title) {
    updTask.title = task.title;
  }

  if (updTask.isDone) {
    updTask.isDone = task.isDone;
  }

  if (!updTask){
    res.status(400);
    res.json({
      error: 'Bad data'
    });
  } else {

    db.tasks.update(
        {_id: mongojs.ObjectId(req.params.id)},
        updTask,
        {},
        (err, task) => {

          if (err) {
            res.send(err);
          }

          res.json(task);
    });

  }
});


module.exports = router;