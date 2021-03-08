var express = require('express');
var router = express.Router();
const Users = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  Users.find({
    name: '小明',
  }, function (err, user) {
    if (err) {
      res.send('操作失败')
      return
    }
    console.log(user)
    res.send(user)
  })

  Users.create([{
    name: "小l",
    age: 20,
    gender: "female",
    address: "广东东莞"
  }], err => {
    if (!err) {
      console.log("文档插入成功")
    }
  })
  // res.render('index', {
  //   title: 'Express'
  // });
  // res.send('Hello World')
});

module.exports = router;