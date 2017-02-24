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

/* Create Photo */
router.post('/new', (req, res, next) => {
  authenticationCheck(req, res);
  const knex = getKnex(req);

  //TODO: modify photo to input to file location
  //upload photo to somewhere

  let user_id = req.session.user_id;
  let album_id = req.body.album_id;
  let name = req.body.name;
  let description = req.body.description;
  let file_location = req.body.file_location;
  let currentTime = new Date();

  let result = knex(`photos`)
  .insert({ 
    album_id: album_id,
    name: name,
    description: description,
    file_location: file_location,
    status: 1,
    created_at: currentTime,
    updated_at: currentTime
  })
  .timeout(1000)
  .returning(`*`)
  .then( (result) => {
    console.log(result);
    return res.status(200).json({'message' : 'Photo Created.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Photo Creation Failed.'});
  });
});

/* Edit Photo */
router.put('/edit', (req, res, next) => {
  authenticationCheck(req, res);
  const knex = getKnex(req);

  //TODO: modify photo to input to file location
  //upload photo to somewhere

  let user_id = req.session.user_id;
  let photo_id = req.body.photo_id;
  let album_id = req.body.album_id;
  let name = req.body.name;
  let description = req.body.description;
  //let latitute = req.body.latitude;
  //let longitude = req.body.longitude;
  let status = req.body.status;
  let currentTime = new Date();

  let result = knex(`photos`)
  .where({
    photo_id: photo_id,
  })
  .update({
    album_id: album_id,
    name: name,
    description: description,
  //  latitutde: latitude,
  //  longitude: longitude,
    status: status,
    updated_at: currentTime
  })
  .then( (result) => {
    console.log(result);
    return res.status(200).json({'message' : 'Photo Updated.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Photo Update Failed.'});
  });
});

module.exports = router;
