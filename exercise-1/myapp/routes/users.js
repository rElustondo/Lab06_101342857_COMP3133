var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  console.log(`first name: ${req.body.firstname}`)
  console.log(`last name: ${req.body.lastname}`)
  res.send('POST recieved');
});

router.use(bodyParser.urlencoded({ extended: true }))

module.exports = router;
