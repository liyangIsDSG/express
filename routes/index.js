var express = require('express');
var router = express.Router();
const userModel = require('../lib/userModel')
/* GET home page. */
router.get('/',  function (req, res, next) {
  // appModel.find({
  //   name: '小p',
  // }, function (err, user) {
  //   if (err) {
  //     res.send('操作失败:')
  //   }else{
  //     console.log('查询成功')
  //   }
  
  // })

  // userModel.create([{
  //   name: "小l",
  //   age: 20,
  //   gender: "female",
  //   address: "广东东莞"
  // }], err => {
  //   if (!err) {
  //     console.log("文档插入成功")
  //   }else{
  //     console.log(err)
  //   }
  // })
  // res.render('index', {
  //   title: 'Express'
  // });
  userModel.create({
    name: "小l",
    age: 20,
    gender: "female",
    address: "广东东莞"
  },(err,user) => {
    if(!err) {
      console.log('插入成功')
    }else{
      console.log('插入失败')
    }
  })
  res.send('Hello World')
})

module.exports = router;