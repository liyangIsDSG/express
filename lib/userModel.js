// 用来定义哪个约束条件来约束这个表

// 引入mongoose.js 文件
var mongoose = require('./mongoose.js')

// 引入schema.js 文件
var schema = require("./schema");

// 定义模型 集合名为users 但model传user默认为复数 以下两种写法均可
// var userModel = mongoose.model("user", schema);
var userModel = mongoose.model("users", schema, "users");


//导出
module.exports = userModel;