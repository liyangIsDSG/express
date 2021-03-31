const mongoose = require('../mongoose')
// 引入 userSchema
const vipSchema = require('../schemas/vipSchema')
// 创建model   1. 第一个参数默认为复数 user 为创建或选中的 users 集合
// const userModel = mongoose.model('user', userSchema) 
// 2.第一个一和第三个参数映射
const vipModel = mongoose.model('vips', vipSchema, 'vips')

module.exports = vipModel