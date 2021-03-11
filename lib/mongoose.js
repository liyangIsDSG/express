// 引入mongoose模块
const mongoose = require("mongoose");

// 引入数据库地址
const dbUrl = require('../serviceConf').dbUrl

// 连接数据库服务器 这儿用createConnection会导致新增和查询超时
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, function (error) {
    if (error) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
    }
})

module.exports = mongoose