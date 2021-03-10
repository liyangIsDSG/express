const mongoose = require('../mongoose')
// 创建schema
const userSchema = mongoose.Schema({
    name: String,
    pwd: String
})
// 创建model   1. 第一个参数默认为复数 user 为创建或选中的 users 集合
// const userModel = mongoose.model('user', userSchema) 
// 2.第一个一和第三个参数映射
const userModel = mongoose.model('users', userSchema, 'users')

module.exports = userModel