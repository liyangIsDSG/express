var express = require('express');
var router = express.Router();
const userModel = require('../lib/models/userModel')
router.post('/login', (req, res, next) => {
  console.log(req)

})
module.exports = router