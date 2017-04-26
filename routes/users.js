const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
let db = mongojs('mongodb://yuraantonov11:199111@ds163020.mlab.com:63020/mm', ['users']);


router.get('/users', (req, res, next) => db
    .users.find((err, tasks) => {

      if (err) {
        res.send(err);
      }

      res.json(tasks);

    }));

router.get('/user/:id', (req, res, next) => db
    .users.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{

      if (err) {
        res.send(err);
      }

      res.json(task);

    }));

router.post('/user/', (req, res) => {
  let newUser = req.body;
  if (!(newUser.title || newUser.isDone + '')){
    res.status(400);
    res.json({
      error: 'Bad data'
    });

  } else {


    db.users.save(newUser, (err, task)=>{

      if (err) {
        res.send(err);
      }

      res.json(task);
    });
  }
});

router.delete('/user/:id', (req, res, next) => db
    .users.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{

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

    db.users.update(
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