var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

let getKnex = (req) => {
  return req.app.get('knex');
};

let getJwt = (req) => {
  return req.app.get('jwt');
};

/* GET sample users listing. */
router.get('/sample', function(req, res, next) {
  const knex = getKnex(req);

  knex.select('user_id', 'email', 'handle', 'first_name', 'last_name', 'location_string', 'years_exp', 'summary', 'profile_picture')
  .from(`users`)
  .whereNot(`first_name`, ``).orWhereNot(`last_name`, ``).andWhereNot(`location_string`, '') //only get accounts where first_name or last_name are available
  .orderBy(`created_at`, `desc`)
  .timeout(1000)
  .then( (result) => {
    return res.status(200).json(result);
  })
  .catch((error) => {
    console.log(error);
    return res.status(400).json({ success: false, message: 'Login Failed.' });
  });

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
        name: 'General',
        description: '',
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
          'token' : token,
          'email' : email,
          user_id: result[0].user_id
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
              token: token,
              email: email,
              user_id: result[0].user_id
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

/* Edit user account */
router.post('/update', (req, res, next) => {
  let token = req.body.token;
  let handle = req.body.handle;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let location_string = req.body.location_string;
  let years_exp = req.body.years_exp;
  let summary = req.body.description;

  const jwt = getJwt(req);

  //If there is already a token
  if(token) {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'Failed to authenticate token.' });
      }
      else {
        const knex = getKnex(req);
        //decoded.user_id
        knex(`users`)
        .where(`user_id`, `=`, decoded.user_id)
        .update({
          handle: handle,
          first_name: first_name,
          last_name: last_name,
          location_string: location_string,
          years_exp: years_exp,
          summary: summary
        })
        .then(() => {
          return res.status(200).json({ success: true, message: 'User Updated'});
        })
      }
    })
  }
  else {
    return res.status(401).json({ success: false, message: 'Not Authorized.' });
  }

});

/*Update user profile Image*/
router.post('/profile_image', (req, res, next) => {
  let token = req.body.token;
  let file_location = req.body.file_location;
  let currentTime = new Date();

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
        const knex = getKnex(req);

        knex(`users`)
        .where(`user_id`, `=`, decoded.user_id)
        .update({
          profile_picture: file_location,
          updated_at: currentTime,
        })
        .then(() => {
          return res.status(200).json({ success: true, message: 'Profile Image Updated'});
        })
        .catch((error) => {
          return res.status(400).json({ success: false, message: "Profile Image Update Failed"})
        })
      }
    })
  }
  else {
    return res.status(400).json({ success: false, message: 'Cannot upload profile image if not authenticated.' })
  }
});

/* GET users profile. */
router.get('/:id', function(req, res, next) {
  const knex = getKnex(req);

  knex.select('user_id', 'email', 'handle', 'first_name', 'last_name', 'location_string', 'years_exp', 'summary', 'profile_picture')
  .from(`users`)
  .where(`user_id`, req.params.id)
  .limit(1)
  .timeout(1000)
  .then( (result) => {
    console.log(result)
    return res.status(200).json(result);
  })
  .catch((error) => {
    console.log(error);
    return res.status(400).json({ success: false, message: 'Login Failed.' });
  });
});

module.exports = router;