var express = require('express');
var router = express.Router();

let loggedInCheck = (req, res) => {
  if(!req.session.user_id) {
    return res.status(401).json({'message' : 'Authentication Required'});
  }
};

let getKnex = (req) => {
  return req.app.get('knex');
};

/* Create album */
router.post('/new', function(req, res, next) {
  loggedInCheck(req, res);
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

/* Delete album */
router.post('/delete', (req, res, next) => {

});

module.exports = router;
