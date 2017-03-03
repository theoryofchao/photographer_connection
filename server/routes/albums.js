var express = require('express');
var router = express.Router();

let getKnex = (req) => {
  return req.app.get('knex');
};

let getJwt = (req) => {
  return req.app.get('jwt');
};

/* Create Album */
router.post('/new', (req, res, next) => {
  const knex = getKnex(req);

  let token = req.body.token;
  let name = req.body.name;
  let description = req.body.description;
  let currentTime = new Date();

  const jwt = getJwt(req);

  //If there is already a token
  if(token) {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        let result = knex(`albums`)
        .insert({ 
          user_id: decoded.user_id,
          name: name,
          description: description,
          status: 1,
          created_at: currentTime,
          updated_at: currentTime
        })
        .timeout(1000)
        .returning(`*`)
        .then( (result) => {
          console.log(result);
          return res.status(200).json({
            success : true,
            content : result
          });
        })
        .catch( (error) => {
          console.error(error);
          return res.status(400).json({
            success : false,
            content : 'Album Creation Failed.'});
        });
      }
    })
  }

  else {
    return res.status(401).json({ success: false, message: 'Not authorized to create album.' })
  }


});

/* Edit Album Information */
router.put('/edit', (req, res, next) => {
  authenticationCheck(req, res);
  const knex = getKnex(req);

  let album_id = req.body.album_id;
  let user_id = req.session.user_id;
  let name = req.body.name;
  let description = req.body.description;
  let latitude = req.body.latitude;
  let longitude = req.body.longitude;
  let start_date = req.body.start_date;
  let end_date = req.body.end_date;
  let currentTime = new Date();

  let result = knex(`albums`)
  .where({
    album_id: album_id,
    user_id: user_id
  })
  .update({
    name: name,
    description: description,
    latitutde: latitude,
    longitude: longitude,
    start_date: start_date,
    end_date: end_date,
    updated_at: currentTime
  })
  .then( (result) => {
    console.log(result);
    return res.status(200).json({'message' : 'Album Updated.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Album Update Failed'});
  });

});

/* Delete Album */
router.delete('/delete', (req, res, next) => {
  authenticationCheck(req, res);
  const knex = getKnex(req);

  let album_id = req.body.album_id;
  let user_id = req.session.user_id;
  let currentTime = new Date();

  let result = knex(`albums`)
  .where({
    album_id: album_id,
    user_id: user_id
  })
  .update({
    status: -1,
    updated_at: currentTime
  })
  .then( (result) => {
    console.log(result);
    return res.status(200).json({'message' : 'Album Deleted.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Album Deletion Failed'});
  });
});

/* Get all Albums by a User */
router.get('/user/:user_id', (req, res, next) => {
  let user_id = req.params.user_id;
  const knex = getKnex(req);

  knex
  .select(`*`)
  .from(`albums`)
  .where({
    user_id: user_id
  })
  .timeout(1000)
  .then( (result) => {
    console.log(result);
    return res.status(200).json(result);
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'User Album Retrival Failed'});
  });  
})


module.exports = router;
