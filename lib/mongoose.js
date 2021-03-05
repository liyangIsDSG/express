// 引入mongoose模块
var mongoose = require("mongoose");


function insertData(db) {
    var devices = db.collection('data');
    var data = {
        "name": "test",
        "age": 22,
        "addr": "nb",
        "addTime": new Date()
    };
    devices.insert(data, function (error, result) {
        if (error) {
            console.log('Error:' + error);
        } else {

            console.log('Success:', result.result.n);
        }
        db.close();
    });
}
// 连接数据库服务器
mongoose.connect('mongodb://106.53.25.94:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功 ')
    }
})


module.exports = mongoose