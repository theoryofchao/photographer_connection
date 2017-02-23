var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* REGISTER user account */
router.post('/register', (req, res, next) => {
  res.send('blah');
});

module.exports = router;
