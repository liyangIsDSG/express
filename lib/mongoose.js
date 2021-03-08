// 引入mongoose模块
var mongoose = require("mongoose");



// 连接数据库服务器
mongoose.createConnection('mongodb://106.53.25.94:27017/data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, function (error) {
    if (error) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功 123')
    }
})
// 实例化连接对象
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', (callback) => {
    console.log('MongoDB for user.js连接成功！！')
})

module.exports = mongoose