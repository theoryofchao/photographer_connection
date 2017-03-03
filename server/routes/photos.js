var express = require('express');
var router = express.Router();

let getKnex = (req) => {
  return req.app.get('knex');
};

let getJwt = (req) => {
  return req.app.get('jwt');
};

/* Create Photo */
router.post('/new', (req, res, next) => {
  let token = req.body.token;

  let album_id = req.body.album ? req.body.album : null;

  console.log(album_id);
  return res.status(200).json({success: false});

  let file_location = req.body.file_location;
  let currentTime = new Date();

  const jwt = getJwt(req);
  const knex = getKnex(req);

    //If there is already a token
  if(token) {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'Failed to authenticate token.' });
      }
      else {
        knex
        .select(`album_id`)
        .from(`albums`)
        .where({
          user_id: decoded.user_id,
          status: 0
        })
        .limit(1)
        .timeout(1000)
        .then( (result) => {
          //insert photo in database
            return result = knex(`photos`)

            .insert({
              album_id: result[0].album_id,
              file_location: file_location,
              status: 1,
              created_at: currentTime,
              updated_at: currentTime
            })
            .timeout(1000)
            .returning(`*`);
        })
        .then( (result) => {
          console.log(result);
          return res.status(200).json({'message' : 'Photo Created.'});
        })
        .catch( (error) => {
              console.error(error);
              return res.status(400).json({'message' : 'Photo Creation Failed.'});
        });
      }
    })
  }
  else {
    return res.status(400).json({ success: false, message: 'Cannot upload photo if not authenticated.' })
  }
});

/* Create Photo in a specific album*/
router.post('/new/:album_id', (req, res, next) => {
  let token = req.body.token;

  let album_id = req.params.album_id ? req.params.album_id : null;
  let file_location = req.body.file_location;
  let currentTime = new Date();

  const jwt = getJwt(req);
  const knex = getKnex(req);

    //If there is already a token
  if(token) {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'Failed to authenticate token.' });
      }
      else {
        knex(`photos`)
        .insert({
          album_id: album_id,
          file_location: file_location,
          status: 1,
          created_at: currentTime,
          updated_at: currentTime
        })
        .timeout(1000)
        .returning(`*`)
        .then((result) => {
          console.log(result);
          return res.status(200).json({'message' : `Photo inserted into album ${album_id}.`});
        })
        .catch((error) => {
          console.error(error);
          return res.status(400).json({'message' : 'Photo Creation Failed.'});
        });
      }
    })
  }
  else {
    return res.status(400).json({ success: false, message: 'Cannot upload photo if not authenticated.' })
  }
});

/* Edit Photo */
router.put('/edit', (req, res, next) => {
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

/* Delete Photo */
router.delete('/delete', (req, res, next) => {
  const knex = getKnex(req);

  //TODO: modify photo to input to file location

  //TODO: check if photo belongs to that user
  let user_id = req.session.user_id;
  let photo_id = req.body.photo_id;
  let currentTime = new Date();

  let result = knex(`photos`)
  .where({
    photo_id: photo_id,
  })
  .update({
    status: -1,
    updated_at: currentTime
  })
  .then( (result) => {
    console.log(result);
    return res.status(200).json({'message' : 'Photo Deleted.'});
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'Photo Deletion Failed.'});
  });
});

/* Get featured photos */
// TODO: currently shows all
router.get('/featured', (req, res, next) => {
  const knex = getKnex(req);

  knex.select(`*`)
  .from(`photos`)
  .where({
    status: 1
  })
  .orderBy(`created_at`, `desc`)
  .timeout(1000)
  .then( (result) => {
    console.log(result);
    return res.status(200).json(result);
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: 'Photo Retrieval Failed'
    });
  });
})

/* Get all photos from a user */
router.get('/user/:user_id', (req, res, next) => {
  let user_id = req.params.user_id;
  console.log(user_id);
  const knex = getKnex(req);

  knex
  .select(`*`)
  .from(`albums`)
  .innerJoin(`photos`, `albums.album_id`, `photos.album_id`)
  .where({
    user_id: user_id
  })
  .timeout(1000)
  .then( (result) => {
    console.log("line 182");
    console.log(result);
    return res.status(200).json(result);
  })
  .catch( (error) => {
    console.error(error);
    return res.status(400).json({'message' : 'User photo Retrival Failed'});
  });
})

module.exports = router;