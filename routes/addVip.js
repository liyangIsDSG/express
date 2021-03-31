var express = require('express');
var router = express.Router();
const vipModel = require('../lib/models/vipModel')

router.get('/getVipList', (req, res, next) => {
    console.log(req.body)
    let query = vipModel.find({});
    let page = Number(req.query.page);
    // note: req拿到的 rows 不转Number,mongodb报错 
    let rows = Number(req.query.rows);
    let skips = (page - 1) * rows
    // 当前页显示的数据所有数据-前几页显示的数据
    query.skip(skips);
    query.limit(rows)
    query.exec(function (err, rs) {
        if (err) {
            console.log('exec执行失败了')
            res.send(err);
        } else {
            // 计算数据总数
            vipModel.find(function (err, result) {
                let jsonArray = {
                    vipList: rs,
                    total: result.length
                };
                res.send(jsonArray);
            });

        }
    })
})

router.post('/addVip', (req, res) => {
        
        console.log(req.body.name,req.body.tel,req.body.integral)
        vipModel.create([{
            name: req.body.name,
            tel: req.body.tel,
            integral: req.body.integral
        }], (err, resl) => {
            console.log('插入数据执行之后的回调')
            if (err) {
                res.send('数据库插入失败')
            }
            res.send('ok')
        })

        // Everything went fine.

})
module.exports = router