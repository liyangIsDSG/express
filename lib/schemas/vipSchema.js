// 引入 Mongoose
var mongoose = require('../mongoose')

// 定义schema
var schema = mongoose.Schema

const blog = new schema({
    // 这里是数据库自己创建的属性名
    'name': {
        type: String,
        requeire: true
    },
    'tel': {
        type: String,
        requeire: true
    },
    'integral': {
        type: Number,
        requeire: true
    }
})

module.exports = blog