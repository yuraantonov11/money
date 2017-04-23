const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.render('client/src/index.html');
  res.send('res');
  next();
});
module.exports = router;