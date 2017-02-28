var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

let getKnex = (req) => {
  return req.app.get('knex');
};

let getJwt = (req) => {
  return req.app.get('jwt');
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  //TODO:
  res.send('respond with a resource');
});

/* Register user account */
router.post('/register', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let password_confirmation = req.body.password_confirmation;
  let token = req.body.token;

  const jwt = getJwt(req);

  //If there is already a token
  if(token) {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'Failed to authenticate token.' });
      }
      else {
        // req.decoded = decoded
        // next()
        console.log(decoded.user_id);
        return res.status(400).json({ success: false, message: 'Already logged in.' })
      }
    })
  }

  // //If no token available
  else {
    if (password != password_confirmation) {
      return res.status(400).json({'message' : 'Passwords do not match.'});
    }
    password = bcrypt.hashSync(password, 10); //TODO: change salt later to env
    let currentTime = new Date();
    const knex = getKnex(req);

    let result = knex(`users`)
    .insert({
      email: email,
      password: password,
      created_at: currentTime,
      updated_at: currentTime,
      status: 1
    })
    .timeout(1000)
    .returning(`*`)
    .then( (result) => {
      //TODO: generate default user album
      let token = jwt.sign({user_id: result[0].user_id}, process.env.JWTSECRET, {
        expiresIn : '6h'  //300 seconds
      });

      let result2 = knex(`albums`)
      .insert({
        user_id: result[0].user_id,
        name: 'default',
        description: 'default',
        status: 0,
        created_at: currentTime,
        updated_at: currentTime
      })
      .timeout(1000)
      .returning(`*`)
      .then( (result2) => {
        return res.status(200).json({
          'success' : true,
          'message' : 'Registration Success.',
          'token' : token
        });
      })
      .catch( (error) => {
        console.error(error);
      });



    })
    .catch( (error) => {
      if(error['constraint'] == 'users_email_unique') {
        return res.status(400).json({
          'success' : false,
          'message' : 'Email Already Used.'
        });
      }
      else {
        return res.status(400).json({'message' : 'Registration Failure.'});
      }

    });
  }
});

/* Login user account */
router.post('/login', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let token = req.body.token;

  const jwt = getJwt(req);

  //If there is already a token
  if(token) {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'Failed to authenticate token.' });
      }
      else {
        // req.decoded = decoded
        // next()
        //console.log(decoded.user_id);
        return res.status(400).json({ success: false, message: 'Already logged in.' })
      }
    })
  }

  //If no token available
  else {

    const knex = getKnex(req);

    knex.select()
    .from(`users`)
    .where(`email`, email)
    .limit(1)
    .timeout(1000)
    .then( (result) => {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if(err) {
          return res.status(400).json({ success: false, message: 'Error occurred during password comparison.' });
        }
        else {
          if(response){
            let token = jwt.sign({user_id: result[0].user_id}, process.env.JWTSECRET, {
              expiresIn : '6h'  //300 seconds
            });
            return res.status(200).json({
              success: true,
              message: 'Login Successful.',
              token: token
            });
          }
          return res.status(400).json({ success: false, message: 'Incorrect password.' });
        }

      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ success: false, message: 'Login Failed.' });
    });
  }
});

/* Logout user account */
router.delete('/logout', (req, res, next) => {
  req.session = null;
  res.status(200).json({'message' : `Logged out`});
});

module.exports = router;