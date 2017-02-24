var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

let loggedInCheck = (req, res) => {
  if(req.session.user_id) {
    //TODO: REDIRECT
    return res.status(400).json({'message' : 'Already logged in'});
  }
};

let getKnex = (req) => {
  return req.app.get('knex');
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  //TODO:
  res.send('respond with a resource');
});

/* Register user account */
router.post('/register', (req, res, next) => {
  loggedInCheck(req, res);
  const knex = getKnex(req);
  
  let email = req.body.email;
  let password = req.body.password;
  let password_confirmation = req.body.password_confirmation;

  if (password != password_confirmation) {
    return res.status(400).json({'message' : 'Passwords do not match.'})
  }

  password = bcrypt.hashSync(password, 10); //TODO: change later?
  
  let currentTime = new Date();

  let result = knex(`users`)
  .insert({ 
    email: email,
    password: password,
    created_at: currentTime,
    status: 1
  })
  .timeout(1000)
  .returning(`*`)
  .then( (result) => {
    //generete user default album

    console.log(result);
    req.session.user_id = result[0].user_id;
    return res.status(200).json({'message' : 'Registration Success.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Registration Failure.'});
  });
});

/* Login user account */
router.post('/login', (req, res, next) => {
  loggedInCheck(req, res);
  const knex = getKnex(req);

  let email = req.body.email;
  let password = req.body.password;

  knex.select()
  .from(`users`)
  .where(`email`, email)
  .limit(1)
  .timeout(1000)
  .then( (result) => {
    bcrypt.compare(password, result[0].password, (error, response) => {
      req.session.user_id = result[0].user_id;
      return res.status(200).json({'message' : 'Logged in'});
    });
  })
  .catch( (error) => {
    console.error(error)
    return res.status(400).json({'message' : 'Error'});
  });
});

/* Logout user account */
router.delete('/logout', (req, res, next) => {
  req.session = null;
  res.status(200).json({'message' : `Logged out`});
});

module.exports = router;
