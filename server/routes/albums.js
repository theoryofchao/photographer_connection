var express = require('express');
var router = express.Router();

let authenticationCheck = (req, res) => {
  if(!req.session.user_id) {
    return res.status(401).json({'message' : 'Authentication Required'});
  }
};

let getKnex = (req) => {
  return req.app.get('knex');
};

/* Create Album */
router.post('/new', (req, res, next) => {
  authenticationCheck(req, res);
  const knex = getKnex(req);

  let user_id = req.session.user_id;
  let name = req.body.name;
  let description = req.body.description;
  let currentTime = new Date();

  let result = knex(`albums`)
  .insert({ 
    user_id: user_id,
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
    return res.status(200).json({'message' : 'Album Created.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Album Creation Failed.'});
  });
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

module.exports = router;
