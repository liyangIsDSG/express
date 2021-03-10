var express = require('express');
var router = express.Router();
const appModel = require('../lib/models/userModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  appModel.find({}, function (err, user) {
    if (err) {
      console.log('操作失败', err)
      res.send('操作失败')
      return
    } else {
      console.log('查询成功')
      res.send(user)
    }
    console.log(user)
  })

  // appModel.create([{
  //   name: "小l",
  //   age: 20,
  //   gender: "female",
  //   address: "广东东莞"
  // }], err => {
  //   if (!err) {
  //     console.log("文档插入成功")
  //   }
  // })
  // res.render('index', {
  //   title: 'Express'
  // });
  // res.send('Hello World')
});

module.exports = router;