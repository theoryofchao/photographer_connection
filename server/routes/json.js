var express = require('express');
var router = express.Router();

let getKnex = (req) => {
  return req.app.get('knex');
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* REGISTER user account */
router.post('/register', (req, res, next) => {
  const knex = getKnex(req);
  let currentTime = new Date();
  currentTime = Date.now();
  let result = knex(`users`).insert({ email: "roger.ti.chao@gmail.com",
                                      password: "password",
                                      created_at: currentTime
  });
  console.log(result);
  res.send('great success');
});

/* LOGIN user account */
router.post('/login', (req, rest, next) => {
  //login logic
});

/* LOGOUT user account */
router.delete('/logout', (req, rest, next) => {
  //logout logic
});

module.exports = router;
