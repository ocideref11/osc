var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OSC' });
});

router.get('/daccess', function(req, res, next) {
  res.render('daccess', { title: 'OSC' });
});

module.exports = router;
