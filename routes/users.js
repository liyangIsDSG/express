var express = require('express');
var router = express.Router();
const mongoclient = require("mongodb").MongoClient;

const assert = require('assert');

const url = "mongodb://106.53.25.94:27017";

// Database Name
const dbName = 'data';



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  mongoclient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (err, client) {
    client.db("data").collection("table1").insertOne({
      name: "giao"
    }).then(function (result) {
      console.log(result, '插入成功')
    }, function (err) {
      console.log(err.message);
    })
  });
});

router.get("/add", function (req, res) {
  //插入数据
  mongo.insertMany({
    user: req.body.name,
    pwd: req.body.password,
    sex: req.body.sex
  }).then((data) => {
    console.log('插入成功');
  }).catch((err) => {
    console.log('插入失败');
  });
  res.send("添加成功", res)
})


module.exports = router;