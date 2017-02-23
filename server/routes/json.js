var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

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
  /*let email = request.body.email;
  let password = request.body.password;
  let password_confirmation = request.body.password_confirmation;
  if (password != password_confirmation) {
    return res.status(400).json({'message' : 'Passwords do not match.'})
  }
  */
  let password = "temp";
  password = bcrypt.hashSync(password, 10); //TODO: change later?

  
  let currentTime = new Date();
  

  let result = knex(`users`)
  .insert({ 
    email: "5@5.com",
    password: password,
    created_at: currentTime,
    status: 1
  })
  .timeout(1000)
  .returning(`*`)
  .then( (result) => {
    console.log(result);
    //req.session.user_id = result[0].user_id;
    return res.status(200).json({'message' : 'Registration Success.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Registration Failure.'})
  });
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
