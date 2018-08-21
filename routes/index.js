var express = require('express');
var router = express.Router();
const dataController = require('../controllers/data')
/* GET home page. */

router.get('/data/', dataController.getData);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
