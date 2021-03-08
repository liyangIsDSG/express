var express = require('express');
var users = express.Router();
// const mongoose = require('mongoose')
// // 连接mongodb
// mongoose.createConnection("mongodb://106.53.25.94:27017/data", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
// // // 实例化连接对象
// const db = mongoose.connection
// db.on('error', console.error.bind(console, '连接错误：'))
// db.once('open', (callback) => {
//   console.log('MongoDB for user.js连接成功！！')
// })
// // 创建schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   pwd: String
// })
// // // 创建model
// const users = mongoose.model('users', userSchema) // users 为创建或选中的集合

users.post('/login', function (req, res, next) {
})

module.exports = users