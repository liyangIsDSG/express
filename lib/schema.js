// 引入 Mongoose
var mongoose = require('./mongoose.js')

// 定义schema
var schema = mongoose.Schema

const blog = new schema({
    // 这里是数据库自己创建的属性名
    'name': {
        type: String,
        requeire: true
    },
    'pwd': {
        type: String,
        requeire: false
    },
})

module.exports = blog