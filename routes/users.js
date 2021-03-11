var express = require('express');
var router = express.Router();
const userModel = require('../lib/models/userModel')
router.get('/', (req, res, next) => {
  console.log('接口调用')
  res.send('接口调用成功')
})
router.post('/login', (req, res, next) => {
  console.log(req)

})
module.exports = router