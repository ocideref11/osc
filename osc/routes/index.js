var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OSC' });
});

router.get("/driver", function(req, res, next){
  res.render("dlogin", {title:"OSC"})
})

/* POST home page.*/
router.post("/driver", function(req, res, next){
  res.render("dindex", {title:"OSC"})
})

module.exports = router;
