const mongoose = require('mongoose')
const mongoObj = require('../mongoose')
const singleVo = mongoObj.singleVo
// 创建schema
const userSchema = new mongoose.Schema({
    name: String,
    pwd: String
})
// 创建model
const users1 = mongoose.model('users', userSchema) // users 为创建或选中的集合

module.exports = users1