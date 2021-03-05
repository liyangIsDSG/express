// 用来定义哪个约束条件来约束这个表

// 引入mongoose.js 文件
var mongoose = require('./mongoose.js')

// 引入schema.js 文件
var schema = require("./schema");

// 定义模型 表名为our
var appModel = mongoose.model("our", schema);

//导出
module.exports = appModel;