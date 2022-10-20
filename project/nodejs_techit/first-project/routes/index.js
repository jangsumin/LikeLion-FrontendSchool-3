var express = require('express');
var router = express.Router();

router.post('/main', (req, res) => {
  // res.json({
  //   message: "success!!"
  // });
  console.log(req.body);
});

module.exports = router;
