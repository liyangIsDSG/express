// 引入 Mongoose
var mongoose = require('./mongoose.js')

// 定义schema
var schema = mongoose.Schema

const blog = new schema({
    // 这里是数据库自己创建的属性名
    'user': {
        type: String,
        requeire: false
    },
    'pwd': {
        type: String,
        requeire: false
    },
})

module.exports = blog