var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.user);
  if (req.query.user == "MaximusTribee") {
    res.render('index', { mode: 'MaximusTribee'});
  }
  else {
      res.render('index', { mode: 'SSSpencer413'});
  }

});

module.exports = router;
